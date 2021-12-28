/* eslint-disable */
import axios, { AxiosInstance } from 'axios'
import _ from 'lodash'
import store from '../Redux'

class GoogleDriveAPI {
  private API_KEY: string = _.get(process.env, 'REACT_APP_GOOGLE_API_KEY', '')

  private axiosInstance: AxiosInstance

  private static instance: GoogleDriveAPI | null = null

  private RootFolderID = ''

  public static getInstance(): GoogleDriveAPI | null {
    const tokenType: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.tokenType', '')
    const accessToken: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.accessToken', '')

    if (this.instance === null && tokenType && accessToken) {
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

  public async listFiles(includeDeleted = false, extraParams?: any): Promise<any> {
    const params = {
      ...extraParams
    }

    if (!includeDeleted) {
      params.q = 'trashed=false'
    }

    return this.axiosInstance('files', { params })
  }

  public async uploadFile(fileName: string, content: string, meta: any): Promise<any> {
    const file = new Blob([content], { type: 'text/plain' })
    const metadata = {
      ...meta,
      name: fileName,
      mimeType: 'text/plain'
    }

    const reqBody = new FormData()
    reqBody.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json; charset=UTF-8' }))
    reqBody.append('file', file)

    this.axiosInstance('https://www.googleapis.com/upload/drive/v3/files', {
      method: 'POST',
      responseType: 'json',
      params: { uploadType: 'multipart' },
      data: reqBody
    })
  }

  public async createFile(fileName: string, data?: any): Promise<any> {
    return this.axiosInstance('files', {
      method: 'POST',
      data: {
        ...data,
        name: fileName
      }
    })
  }

  public async createFolder(folderName: string, data?: any): Promise<any> {
    return this.createFile(folderName, { ...data, mimeType: 'application/vnd.google-apps.folder' })
  }

  public async getFileByName(fileName: string): Promise<any> {
    const { files } = (await this.listFiles()).data
    return _.find(files, { name: fileName })
  }

  public getRootFolder(): Promise<any> {
    return this.getFileByName('PasswordManagerData')
  }

  public createInitialFiles(): void {
    this.getRootFolder().then((rootFolder) => {
      if (rootFolder === undefined) {
        this.createFolder('PasswordManagerData', { folderColorRgb: 'Red' }).then((root) => {
          this.RootFolderID = root.data.id
          Promise.all([
            this.createFile('DO NOT EDIT ANYTHING IN THIS FOLDER', { parents: [root.data.id] }),
            this.createFolder('Passwords', { parents: [root.data.id] }),
            this.createFolder('Files', { parents: [root.data.id] }),
            this.uploadFile('Settings.enc.txt', JSON.stringify(store.getState().User.Settings), { parents: [root.data.id] })
          ])
        })
      }
    })
  }
}

export default GoogleDriveAPI
