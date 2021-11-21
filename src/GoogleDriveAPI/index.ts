import axios, { AxiosInstance } from 'axios'
import _ from 'lodash'
import store from '../Redux'

class GoogleDriveAPI {
  private API_KEY: string = _.get(process.env, 'REACT_APP_GOOGLE_API_KEY', '')
  private axiosInstance: AxiosInstance
  private static instance: GoogleDriveAPI | null = null

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

  public async createInitialFiles() {
    const dataFolderExists = await this.getFileByName('PasswordManagerData')
    if (dataFolderExists === undefined) {
      this.createFolder('PasswordManagerData', { 'folderColorRgb': 'Red' }).then((rootFolder) => {
        Promise.all([
          this.createFile('DO NOT EDIT ANYTHING IN THIS FOLDER', { 'parents': [rootFolder.data.id] }),
          this.createFolder('Passwords', { 'parents': [rootFolder.data.id] }),
          this.createFolder('Files', { 'parents': [rootFolder.data.id] }),
          this.createFile('Settings.enc.txt', { 'parents': [rootFolder.data.id] }),
        ])
      })
    }
  }
}

export default GoogleDriveAPI
