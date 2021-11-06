import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import UIReducer, { UIState } from './UI'
import DataReducer, { DataState } from './Data'
import UserReducer, { UserState } from './User'

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

let enhancer = undefined
if (process.env.NODE_ENV === 'development') {
  enhancer = composeWithDevTools(applyMiddleware(createLogger()))
}

const store = createStore(rootReducer, enhancer)
export default store