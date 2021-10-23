import { combineReducers } from 'redux'
import { UserReducer, UserState } from './UserReducer'
import { AlertReducer, AlertState } from './AlertReducer'

export interface RootState {
  Alert: AlertState
  User: UserState
}

const rootReducer = combineReducers<RootState>({
  Alert: AlertReducer,
  User: UserReducer
})

export default rootReducer
