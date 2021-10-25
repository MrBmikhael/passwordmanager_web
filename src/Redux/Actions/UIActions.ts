import { Action, ActionCreator } from 'redux'
import { AlertStatus, UIConstants } from '../Constants/UIConstants'

export interface AlertAction extends Action {
  message: string
  status: AlertStatus
}

const endAppLoading: ActionCreator<Action> = () => ({ type: UIConstants.END_APP_LOADING })

const addAlert: ActionCreator<AlertAction> = (status: AlertStatus, message: string) => ({
  type: UIConstants.ADD_ALERT,
  status,
  message
})

export const UIActions = {
  addAlert,
  endAppLoading
}
