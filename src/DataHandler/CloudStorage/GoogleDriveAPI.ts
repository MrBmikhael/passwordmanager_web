import axios, { AxiosInstance } from 'axios'
import _ from 'lodash'
import store from '../../Redux/store'

class GoogleDriveAPI {
  private API_KEY: string = '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'
  private axiosInstance: AxiosInstance | null = null
  private static instance: GoogleDriveAPI | null = null

  public static getInstance(): GoogleDriveAPI {
    if (this.instance === null) {
      this.instance = new GoogleDriveAPI()
    }
    return this.instance
  }

  private constructor() {
    const token_type: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.token_type')
    const access_token: string = _.get(store.getState().User.Auth.GoogleToken, 'tokenObj.access_token')

    this.axiosInstance = axios.create({
      baseURL: 'https://www.googleapis.com/drive/v3/',
      timeout: 3000,
      headers: { Authorization: `${token_type} ${access_token}` },
      params: { 'key': this.API_KEY }
    })
  }

  public async listFiles(includeDeleted = false, extraParams?: any) {
    if (this.axiosInstance) {
      const params = {
        ...extraParams
      }

      if (!includeDeleted) {
        params['q'] = 'trashed=false'
      }

      const res = await this.axiosInstance(`files`, { params })
      return res.data
    }
  }

  public async createFile(fileName: string, data?: any) {
    if (this.axiosInstance) {
      const res = await this.axiosInstance(`files`, {
        method: 'POST', data: {
          ...data,
          name: fileName
        }
      })
      return res.data
    }
  }

  public async createFolder(folderName: string, data?: any) {
    return this.createFile(folderName, { ...data, 'mimeType': 'application/vnd.google-apps.folder' })
  }

  public async getFileByName(fileName: string) {
    const files = (await this.listFiles()).files
    return _.find(files, { 'name': fileName })
  }

  public async createInitialFiles() {
    const dataFolderExists = await this.getFileByName('PasswordManagerData')
    if (dataFolderExists === undefined) {
      this.createFolder('PasswordManagerData', { 'folderColorRgb': 'Red' }).then((data) => {
        Promise.all([
          this.createFile('DO NOT EDIT ANYTHING IN THIS FOLDER', { 'parents': [data.id] }),
          this.createFolder('Data', { 'parents': [data.id] }),
          this.createFile('Settings.enc', { 'parents': [data.id] }),
        ])
      })
    }
  }
}

export default GoogleDriveAPI
