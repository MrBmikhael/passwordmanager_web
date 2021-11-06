import { Reducer } from 'redux'
import { UserAction } from './UserActions'
import { UserConstants } from './UserConstants'
import { GoogleLoginResponse } from 'react-google-login'

export interface UserState {
  google_token: GoogleLoginResponse | null
  master_password: string
}

const initialState = {
  google_token: null,
  master_password: ''
}

const UserReducer: Reducer<UserState, UserAction> = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserConstants.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        google_token: action.google_token || null
      }
    case UserConstants.GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        google_token: null
      }
    case UserConstants.MASTER_PASSWORD_SUCCESS:
      return {
        ...state,
        master_password: action.master_password || 'No Password'
      }
    case UserConstants.MASTER_PASSWORD_ERROR:
      return {
        ...state,
        master_password: ''
      }
    case UserConstants.CLEAR_MASTER_PASSWORD:
      return {
        ...state,
        master_password: ''
      }
    case UserConstants.CLEAR:
      return initialState
    default:
      return state
  }
}

export default UserReducer
