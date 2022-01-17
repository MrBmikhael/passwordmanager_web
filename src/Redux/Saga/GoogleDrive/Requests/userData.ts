import PasswordManager from '../../../../PasswordManager'
import Password from '../../../../PasswordManager/Password'

const initPasswordManager = (): void => {
  PasswordManager.getInstance().initializeUser()
}

const getUserData = (): Password[] => {
  PasswordManager.getInstance()
  return []
}

export { initPasswordManager, getUserData }
