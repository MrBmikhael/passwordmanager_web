import PasswordManager from '../../../../PasswordManager'
import Password from '../../../../PasswordManager/Password'

const initPasswordManager = (): void => {
  PasswordManager.getInstance().initializeUser()
}

const getUserData = (): Password[] => {
  const pm = PasswordManager.getInstance()
  return []
}

export { initPasswordManager, getUserData }
