import { Reducer } from 'redux'
import { AlertAction } from '../Actions/UIActions'
import { AlertStatus, UIConstants } from '../Constants/UIConstants'

export interface UIState {
  AppLoading: boolean
  Dialog: { NewEntry: boolean, NewCategory: boolean }
  Snackbar: { message: string, status: AlertStatus }
}

const initialState = {
  AppLoading: true,
  Dialog: { NewEntry: false, NewCategory: false },
  Snackbar: { message: '', status: AlertStatus.info }
}

export const UIReducer: Reducer<UIState, AlertAction> = (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case UIConstants.ADD_ALERT:
      return {
        ...state,
        Snackbar: {
          message: action.message,
          status: action.status
        }
      }
    case UIConstants.END_APP_LOADING:
      return {
        ...state,
        AppLoading: false
      }
    case UIConstants.OPEN_NEW_CATEGORY_DIALOG:
      return {
        ...state,
        Dialog: {
          NewEntry: false,
          NewCategory: true
        }
      }
    case UIConstants.OPEN_NEW_ENTRY_DIALOG:
      return {
        ...state,
        Dialog: {
          NewEntry: true,
          NewCategory: false
        }
      }
    case UIConstants.CLOSE_DIALOG:
      return {
        ...state,
        Dialog: {
          NewEntry: false,
          NewCategory: false
        }
      }
    default:
      return state
  }
}
