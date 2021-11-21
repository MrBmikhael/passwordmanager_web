import { Reducer } from 'redux'
import SnackbarConstants, { SnackbarAlertStatus } from './SnackbarConstants'
import { SnackbarAlertAction } from './SnackbarActions'

export interface SnackbarState {
  message: string
  status: SnackbarAlertStatus
}

const initialState: SnackbarState = {
  message: '',
  status: SnackbarAlertStatus.info
}

const SnackbarReducer: Reducer<SnackbarState, SnackbarAlertAction> = (state = initialState, action: SnackbarAlertAction) => {
  switch (action.type) {
    case SnackbarConstants.VIEW_SNACKBAR_ALERT:
      return {
        ...state,
        message: action.message,
        status: action.status
      }
    default:
      return state
  }
}

export default SnackbarReducer
