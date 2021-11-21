import { combineReducers } from 'redux'
import SettingsReducer, { SettingsState } from './Settings/SettingsReducer'
import AuthReducer, { AuthState } from './Auth/AuthReducer'

export interface UserState {
  Settings: SettingsState
  Auth: AuthState
}

const UserReducer = combineReducers<UserState>({
  Settings: SettingsReducer,
  Auth: AuthReducer
})

export default UserReducer
