/* eslint-disable */
import axios, { AxiosInstance } from 'axios'
import _ from 'lodash'
import store from '../Redux'

export interface GDFile {
  kind: string
  id: string
  name: string
  mimeType: string
  parents: GDFile[]
}

export interface GDFileList {
  kind: string
  nextPageToken: string
  incompleteSearch: boolean
  files: GDFile[]
}

class GoogleDriveAPI {
  private API_KEY: string = _.get(process.env, 'REACT_APP_GOOGLE_API_KEY', '')
  private axiosInstance: AxiosInstance
  private static instance: GoogleDriveAPI

  public static getInstance(): GoogleDriveAPI {
    const tokenType: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.token_type', '')
    const accessToken: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.access_token', '')

    if (!this.instance && tokenType && accessToken) {
      this.instance = new GoogleDriveAPI(tokenType, accessToken)
    }
    return this.instance
  }

  private constructor(tokenType: string, accessToken: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://www.googleapis.com/drive/v3/',
      timeout: 3000,
      headers: { Authorization: `${tokenType} ${accessToken}` },
      params: { key: this.API_KEY }
    })
  }

  // return GDFile[]
  public async listFiles(includeDeleted = false, extraParams?: any): Promise<GDFile[]> {
    const params = {
      ...extraParams
    }

    if (!includeDeleted) {
      params.q = 'trashed=false'
    }

    params.fields = 'files(kind,id,name,mimeType,parents)'
    const fileList: GDFileList = (await this.axiosInstance('files', { params })).data
    return fileList.files
  }

  private async uploadFile(fileName: string, content: string, meta: any, fileID: string): Promise<GDFile> {
    const file = new Blob([content], { type: 'text/plain' })
    const metadata = {
      ...meta,
      name: fileName,
      mimeType: 'text/plain'
    }

    const reqBody = new FormData()
    reqBody.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json; charset=UTF-8' }))
    reqBody.append('file', file)

    const output = await this.axiosInstance(`https://www.googleapis.com/upload/drive/v3/files/${fileID}`, {
      method: 'PATCH',
      responseType: 'json',
      params: { uploadType: 'multipart' },
      data: reqBody
    })

    return output.data
  }

  private async createFile(fileName: string, extraParams?: any): Promise<GDFile> {
    const output = await this.axiosInstance('files', {
      method: 'POST',
      data: {
        ...extraParams,
        name: fileName
      }
    })
    return output.data
  }

  public async getFileByName(fileName: string): Promise<GDFile> {
    const files = await this.listFiles()
    return new Promise((resolve, reject) => {
      const file: GDFile | undefined = _.find(files, { name: fileName })
      if (file) {
        resolve(file)
      }
      reject(new Error("File not found"))
    })
  }

  public async putFile(filename: string, content: string, parentId: string): Promise<GDFile> {
    return this.getFileByName(filename).then((fileData) => this.uploadFile(filename, content, {}, fileData.id))
      .catch(() => this.createFile(filename, { parents: [parentId] }).then((fileData) => this.uploadFile(filename, content, {}, fileData.id)))
  }

  public async getFileContents(file: GDFile): Promise<string> {
    const output = (await this.axiosInstance(`files/${file.id}`, {
      params: {
        'alt': 'media'
      }
    }))
    return output.data
  }

  public async deleteFile(fileID: string): Promise<void> {
    await this.axiosInstance(`files/${fileID}`, {
      method: 'DELETE'
    })
  }

  public async listFilesInFolder(folderID: string): Promise<GDFile[]> {
    const allFiles = await this.listFiles()
    const output = _.filter(allFiles, (item) => JSON.stringify(item.parents).includes(folderID))
    if (output) {
      return output
    } else {
      return []
    }
  }

  // return GDFile
  public async createFolder(folderName: string, extraParams?: any): Promise<GDFile> {
    return this.createFile(folderName, { ...extraParams, mimeType: 'application/vnd.google-apps.folder' })
  }
}

export default GoogleDriveAPI
