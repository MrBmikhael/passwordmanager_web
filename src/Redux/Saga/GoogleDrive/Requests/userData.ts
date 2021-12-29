/* eslint-disable */
import GoogleDriveAPI from "../../../../GoogleDriveAPI"

export async function getUserData() {
  const api = GoogleDriveAPI.getInstance()
  return await api.listFiles()
}
