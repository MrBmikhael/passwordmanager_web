import { combineReducers } from 'redux'
import { UserReducer, UserState } from './UserReducer'
import { UIReducer, UIState } from './UIReducer'
import { DataReducer, DataState } from './DataReducer'

export interface RootState {
  UI: UIState
  User: UserState
  Data: DataState
}

const rootReducer = combineReducers<RootState>({
  UI: UIReducer,
  User: UserReducer,
  Data: DataReducer
})

export default rootReducer
