import { Action, ActionCreator } from 'redux'
import SettingsConstants from './SettingsConstants'
import { SettingsState } from './SettingsReducer'

export interface SettingsAction extends Action {
  newSettings: SettingsState
}

const updateSettings: ActionCreator<SettingsAction> = (newSettings: SettingsState) => ({
  type: SettingsConstants.UPDATE_SETTINGS,
  newSettings
})

export default updateSettings
