import { Action, ActionCreator } from 'redux'
import GlobalConstants from './GlobalConstants'

const endAppLoading: ActionCreator<Action> = () => ({ type: GlobalConstants.END_APP_LOADING })
const openNewCategoryDialog: ActionCreator<Action> = () => ({ type: GlobalConstants.OPEN_NEW_CATEGORY_DIALOG })
const openNewEntryDialog: ActionCreator<Action> = () => ({ type: GlobalConstants.OPEN_NEW_ENTRY_DIALOG })
const closeAllDialogs: ActionCreator<Action> = () => ({ type: GlobalConstants.CLOSE_DIALOG })

const GlobalActions = {
  endAppLoading,
  openNewCategoryDialog,
  openNewEntryDialog,
  closeAllDialogs
}

export default GlobalActions
