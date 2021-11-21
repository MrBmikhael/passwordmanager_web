import { Action, ActionCreator } from 'redux'
import AuthConstants from './AuthConstants'
import { GoogleLoginResponse } from 'react-google-login'

export interface AuthAction extends Action {
  googleLoginResponse?: GoogleLoginResponse
  masterPassword?: string
}

const loginUsingGoogle: ActionCreator<AuthAction> = (googleLoginResponse: GoogleLoginResponse) => {
  return { type: AuthConstants.LOGIN_GOOGLE, googleLoginResponse }
}

const setMasterPassword: ActionCreator<AuthAction> = (masterPassword: string) => {
  return { type: AuthConstants.SET_MASTER_PASSWORD, masterPassword }
}

const clear_master_password: ActionCreator<Action> = () => {
  return { type: AuthConstants.CLEAR_MASTER_PASSWORD }
}

const logout: ActionCreator<Action> = () => {
  return { type: AuthConstants.LOGOUT }
}

const UserActions = {
  loginUsingGoogle,
  setMasterPassword,
  clear_master_password,
  logout
}

export default UserActions
