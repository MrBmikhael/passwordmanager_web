import { Action, ActionCreator } from 'redux'
import { GoogleLoginResponse } from 'react-google-login'
import AuthConstants from './AuthConstants'

export interface AuthAction extends Action {
  googleLoginResponse?: GoogleLoginResponse
  masterPassword?: string
}

const loginUsingGoogle: ActionCreator<AuthAction> = (googleLoginResponse: GoogleLoginResponse) => ({ type: AuthConstants.LOGIN_GOOGLE, googleLoginResponse })
const setMasterPassword: ActionCreator<AuthAction> = (masterPassword: string) => ({ type: AuthConstants.SET_MASTER_PASSWORD, masterPassword })
const clearMasterPassword: ActionCreator<Action> = () => ({ type: AuthConstants.CLEAR_MASTER_PASSWORD })
const logout: ActionCreator<Action> = () => ({ type: AuthConstants.LOGOUT })

const UserActions = {
  loginUsingGoogle,
  setMasterPassword,
  clearMasterPassword,
  logout
}

export default UserActions
