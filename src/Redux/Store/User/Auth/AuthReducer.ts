import { Reducer } from 'redux'
import AuthConstats from './AuthConstants'
import { AuthAction } from './AuthActions'
import { GoogleLoginResponse } from 'react-google-login'

export interface AuthState {
  GoogleToken: GoogleLoginResponse | undefined
  masterPassword: string | undefined
}

const initialState: AuthState = {
  GoogleToken: undefined,
  masterPassword: undefined
}

const AuthReducer: Reducer<AuthState, AuthAction> = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthConstats.LOGIN_GOOGLE:
      return {
        ...state,
        GoogleToken: (action.googleLoginResponse)
      }
    case AuthConstats.SET_MASTER_PASSWORD:
      return {
        ...state,
        masterPassword: action.masterPassword
      }
    case AuthConstats.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default AuthReducer
