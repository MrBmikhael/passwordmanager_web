import { Reducer } from 'redux'
import { AlertAction } from '../Actions/UIActions'
import { AlertStatus, UIConstants } from '../Constants/UIConstants'

export interface UIState {
  AppLoading: boolean
  Snackbar: { message: string, status: AlertStatus }
}

const initialState = {
  AppLoading: true,
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
    default:
      return state
  }
}
