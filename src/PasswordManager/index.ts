import _ from 'lodash'
import GoogleDriveAPI, { GDFile } from '../GoogleDriveAPI'
import store from '../Redux'
import Password from './Password'

class PasswordManager {
  private static pmInstance: PasswordManager

  private gdInstance: GoogleDriveAPI

  private rootFolderName = 'PasswordManagerData'

  private RequiredFolders = ['Passwords', 'Files']

  private folderIds: Record<string, string> = {}

  private constructor() {
    this.gdInstance = GoogleDriveAPI.getInstance()
  }

  public initializeUser(): Promise<void> {
    return this.gdInstance.listFiles().then((fileList) => {
      if (fileList.length === 0) {
        this.createInitialFiles()
      } else {
        fileList.forEach((file) => {
          if (file.mimeType.includes('folder')) {
            this.folderIds[file.name] = file.id
          }
        })

        this.RequiredFolders.forEach((folderName: string) => {
          const filesFolder = _.find(fileList, { name: folderName })
          if (filesFolder) {
            this.folderIds.Files = filesFolder.id
          } else {
            this.gdInstance.createFolder(folderName, { parents: [this.folderIds[this.rootFolderName]] }).then((folder: GDFile) => {
              this.folderIds[folder.name] = folder.id
            })
          }
        })
      }
    })
  }

  public static getInstance(): PasswordManager {
    if (!this.pmInstance) {
      this.pmInstance = new PasswordManager()
    }
    return this.pmInstance
  }

  public addPassword(id: string, content: string): Promise<GDFile> {
    return this.gdInstance.putFile(id, content, this.folderIds.Passwords)
  }

  public async getPasswords(): Promise<void> {
    await this.gdInstance.listFilesInFolder(this.folderIds.Passwords).then((fileList) => {
      fileList.forEach(async (file) => {
        console.log(file)
        const content = await this.gdInstance.getFileContents(file)
      })
    })

    // return [output]
  }

  public async deletePassword(id: string, category: string): Promise<void> {
    await this.gdInstance.deleteFile((await this.gdInstance.getFileByName(`${id}${category}`)).id)
  }

  public async getRootFolder(): Promise<string> {
    if (this.rootFolderName in this.folderIds) {
      const output: string = this.folderIds[this.rootFolderName]
      if (output !== undefined && output !== '' && output !== null) { return output }
    }
    return (await this.gdInstance.getFileByName(this.rootFolderName)).id
  }

  public createInitialFiles(): void {
    this.gdInstance.createFolder(this.rootFolderName, { folderColorRgb: 'Red' }).then((root) => {
      this.folderIds[root.name] = root.id
      Promise.all([
        this.gdInstance.createFolder('Passwords', { parents: [root.id] }),
        this.gdInstance.createFolder('Files', { parents: [root.id] }),
        this.gdInstance.putFile('DO NOT EDIT ANYTHING IN THIS FOLDER', '', root.id),
        this.gdInstance.putFile('Settings.enc.txt', JSON.stringify(store.getState().User.Settings), root.id)
      ]).then((data) => {
        this.folderIds[data[0].name] = data[0].id
        this.folderIds[data[1].name] = data[1].id
      })
    })
  }
}

export default PasswordManager
