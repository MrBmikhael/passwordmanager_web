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

const openNewCategoryDialog: ActionCreator<Action> = () => ({ type: UIConstants.OPEN_NEW_CATEGORY_DIALOG })
const openNewEntryDialog: ActionCreator<Action> = () => ({ type: UIConstants.OPEN_NEW_ENTRY_DIALOG })
const closeAllDialogs: ActionCreator<Action> = () => ({ type: UIConstants.CLOSE_DIALOG })

export const UIActions = {
  addAlert,
  endAppLoading,
  openNewCategoryDialog,
  openNewEntryDialog,
  closeAllDialogs
}
