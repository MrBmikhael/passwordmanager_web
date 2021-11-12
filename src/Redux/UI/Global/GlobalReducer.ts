import { Reducer, Action } from 'redux'
import GlobalConstants from './GlobalConstants'

export interface GlobalState {
  AppLoading: boolean
  NewEntry: boolean
  NewCategory: boolean
  MasterPassword: boolean
}

const initialState: GlobalState = {
  AppLoading: true,
  NewEntry: false,
  NewCategory: false,
  MasterPassword: false
}

const GlobalReducer: Reducer<GlobalState, Action> = (state = initialState, action: Action) => {
  switch (action.type) {
    case GlobalConstants.END_APP_LOADING:
      return {
        ...state,
        AppLoading: false
      }
    case GlobalConstants.OPEN_NEW_CATEGORY_DIALOG:
      return {
        ...state,
        NewEntry: false,
        NewCategory: true
      }
    case GlobalConstants.OPEN_NEW_ENTRY_DIALOG:
      return {
        ...state,
        NewEntry: true,
        NewCategory: false
      }
    case GlobalConstants.OPEN_MASTER_PASSWORD_DIALOG:
      return {
        ...state,
        NewEntry: false,
        NewCategory: false,
        MasterPassword: true
      }
    case GlobalConstants.CLOSE_DIALOG:
      return {
        ...state,
        NewEntry: false,
        NewCategory: false
      }
    default:
      return state
  }
}

export default GlobalReducer
