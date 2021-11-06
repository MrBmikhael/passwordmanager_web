import { Action, ActionCreator } from 'redux'
import SnackbarConstants, { SnackbarAlertStatus } from './SnackbarConstants'

export interface SnackbarAlertAction extends Action {
  message: string
  status: SnackbarAlertStatus
}

const viewSnackbarAlert: ActionCreator<SnackbarAlertAction> = (status: SnackbarAlertStatus, message: string) => ({
  type: SnackbarConstants.VIEW_SNACKBAR_ALERT,
  status,
  message
})

const SnackbarActions = {
  viewSnackbarAlert
}

export default SnackbarActions
