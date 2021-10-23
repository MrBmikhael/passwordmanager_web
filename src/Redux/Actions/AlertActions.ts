import { Action, ActionCreator } from 'redux'
import { AlertConstants, AlertStatus } from '../Constants/AlertConstants'

export interface AlertAction extends Action {
  message: string
  status: AlertStatus
}

const addAlert: ActionCreator<AlertAction> = (status: AlertStatus, message: string) => ({ type: AlertConstants.ADD_ALERT, status, message })

export const AlertActions = {
  addAlert
}
