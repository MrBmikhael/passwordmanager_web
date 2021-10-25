import { combineReducers } from 'redux'
import { UserReducer, UserState } from './UserReducer'
import { UIReducer, UIState } from './UIReducer'

export interface RootState {
  UI: UIState
  User: UserState
}

const rootReducer = combineReducers<RootState>({
  UI: UIReducer,
  User: UserReducer
})

export default rootReducer
