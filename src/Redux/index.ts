import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import UIReducer, { UIState } from './Store/UI'
import DataReducer, { DataState } from './Store/Data'
import UserReducer, { UserState } from './Store/User'
import { watcherSaga } from './Saga/GoogleDrive/GoogleDriveSaga'

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

const sagaMiddleware = createSagaMiddleware()

let enhancer
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  enhancer = composeWithDevTools(applyMiddleware(createLogger(), ...middleware))
} else {
  enhancer = applyMiddleware(...middleware)
}

const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(watcherSaga)
export default store
