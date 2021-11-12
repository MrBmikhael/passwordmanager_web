interface BaseStorage {
  createFile: () => Promise<any>
  createFolder: () => Promise<any>
  deleteFile: () => Promise<any>
  deleteFolder: () => Promise<any>
}

export default BaseStorage