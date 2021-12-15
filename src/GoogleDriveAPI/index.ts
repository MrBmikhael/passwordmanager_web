import axios, { AxiosInstance } from 'axios'
import _ from 'lodash'
import store from '../Redux'

class GoogleDriveAPI {
  private API_KEY: string = _.get(process.env, 'REACT_APP_GOOGLE_API_KEY', '')
  private axiosInstance: AxiosInstance
  private static instance: GoogleDriveAPI | null = null
  private RootFolderID: string = ''

  public static getInstance(): GoogleDriveAPI | null {
    const token_type: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.token_type', '')
    const access_token: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.access_token', '')

    if (this.instance === null && token_type && access_token) {
      this.instance = new GoogleDriveAPI(token_type, access_token)
    }
    return this.instance
  }

  private constructor(token_type: string, access_token: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://www.googleapis.com/drive/v3/',
      timeout: 3000,
      headers: { Authorization: `${token_type} ${access_token}` },
      params: { 'key': this.API_KEY }
    })
  }

  public async listFiles(includeDeleted = false, extraParams?: any) {
    const params = {
      ...extraParams
    }

    if (!includeDeleted) {
      params['q'] = 'trashed=false'
    }

    return this.axiosInstance(`files`, { params })
  }

  public async uploadFile(fileName: string, content: string, meta: any) {
    const file = new Blob([content], { type: 'text/plain' })
    const metadata = {
      ...meta,
      'name': fileName,
      'mimeType': 'text/plain',
    }

    const reqBody = new FormData()
    reqBody.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json; charset=UTF-8' }))
    reqBody.append('file', file)

    this.axiosInstance('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
      method: 'POST',
      responseType: 'json',
      data: reqBody
    })
  }

  public async createFile(fileName: string, data?: any) {
    return this.axiosInstance(`files`, {
      method: 'POST', data: {
        ...data,
        name: fileName
      }
    })
  }

  public async createFolder(folderName: string, data?: any) {
    return this.createFile(folderName, { ...data, 'mimeType': 'application/vnd.google-apps.folder' })
  }

  public async getFileByName(fileName: string) {
    const files = (await this.listFiles()).data.files
    return _.find(files, { 'name': fileName })
  }

  public getRootFolder() {
    return this.getFileByName('PasswordManagerData')
  }

  public createInitialFiles() {
    this.getRootFolder().then((rootFolder) => {
      if (rootFolder === undefined) {
        this.createFolder('PasswordManagerData', { 'folderColorRgb': 'Red' }).then((rootFolder) => {
          this.RootFolderID = rootFolder.data.id
          Promise.all([
            this.createFile('DO NOT EDIT ANYTHING IN THIS FOLDER', { 'parents': [rootFolder.data.id] }),
            this.createFolder('Passwords', { 'parents': [rootFolder.data.id] }),
            this.createFolder('Files', { 'parents': [rootFolder.data.id] }),
            this.uploadFile('Settings.enc.txt', JSON.stringify(store.getState().User.Settings), { 'parents': [rootFolder.data.id] })
          ])
        })
      }
    })
  }
}

export default GoogleDriveAPI