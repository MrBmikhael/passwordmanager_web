import { Reducer } from 'redux'
import { UIAction } from '../Actions/UIActions'
import { AlertStatus, UIConstants } from '../Constants/UIConstants'

export interface UIState {
  AppLoading: boolean
  Dialog: { NewEntry: boolean, NewCategory: boolean }
  Snackbar: { message: string, status: AlertStatus }
  ProgressBar: { progress: number, indeterminate: boolean }
}

const initialState = {
  AppLoading: true,
  Dialog: { NewEntry: false, NewCategory: false },
  Snackbar: { message: '', status: AlertStatus.info },
  ProgressBar: { progress: 0, indeterminate: false }
}

export const UIReducer: Reducer<UIState, UIAction> = (state = initialState, action: UIAction) => {
  if ('progress' in action) {
    switch (action.type) {
      case UIConstants.SET_PROGRESS_VALUE:
        return {
          ...state,
          ProgressBar: {
            progress: action.progress,
            indeterminate: false
          }
        }
      case UIConstants.ENABLE_INDETERMINATE_PROGRESS_BAR:
        return {
          ...state,
          ProgressBar: {
            progress: 0,
            indeterminate: true
          }
        }
      case UIConstants.DISABLE_INDETERMINATE_PROGRESS_BAR:
        return {
          ...state,
          ProgressBar: {
            progress: 0,
            indeterminate: false
          }
        }
      default:
        return state
    }
  }
  else {
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
}
