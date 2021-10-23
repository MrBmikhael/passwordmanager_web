import { Action, ActionCreator } from 'redux'
import { UserConstants } from '../Constants/UserConstants'
import { GoogleLoginResponse } from 'react-google-login'

export interface UserAction extends Action {
  google_token?: GoogleLoginResponse
  master_password?: string
}

const google_login: ActionCreator<UserAction> = (data: GoogleLoginResponse) => {
  return { type: UserConstants.GOOGLE_LOGIN_SUCCESS, google_token: data }
}

const check_master_password: ActionCreator<UserAction> = () => {
  // decrypt the settings file
  return { type: UserConstants.MASTER_PASSWORD_SUCCESS, master_password: 'SOME MASTER PASSWORD' }
}

const clear_master_password: ActionCreator<Action> = () => {
  return { type: UserConstants.CLEAR_MASTER_PASSWORD }
}

const clear: ActionCreator<Action> = () => {
  return { type: UserConstants.CLEAR }
}

export const UserActions = {
  google_login,
  check_master_password,
  clear_master_password,
  clear
}
