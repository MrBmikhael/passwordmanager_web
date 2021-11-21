import GoogleDriveAPI from '../../../../GoogleDriveAPI'

export function getUserData() {
  const GDrive = GoogleDriveAPI.getInstance()
  if (GDrive) {
    return GDrive.listFiles()
  }
}

