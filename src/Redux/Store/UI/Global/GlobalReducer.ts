import { Reducer, Action } from 'redux'
import GlobalConstants from './GlobalConstants'

export interface GlobalState {
  AppLoading: boolean
  NewEntry: boolean
  NewCategory: boolean
  MasterPassword: boolean
  UserSettings: boolean
}

const initialState: GlobalState = {
  AppLoading: true,
  NewEntry: false,
  NewCategory: false,
  MasterPassword: false,
  UserSettings: false
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
        NewCategory: true
      }
    case GlobalConstants.OPEN_NEW_ENTRY_DIALOG:
      return {
        ...state,
        NewEntry: true
      }
    case GlobalConstants.OPEN_MASTER_PASSWORD_DIALOG:
      return {
        ...state,
        MasterPassword: true
      }
    case GlobalConstants.OPEN_USER_SETTINGS_DIALOG:
      return {
        ...state,
        UserSettings: true
      }
    case GlobalConstants.CLOSE_DIALOG:
      return {
        ...initialState,
        AppLoading: false
      }
    default:
      return state
  }
}

export default GlobalReducer
