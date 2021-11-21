import { Reducer } from 'redux'
import SettingsConstants from './SettingsConstants'
import { SettingsAction } from './SettingsActions'
import { PasswordGeneratorProps } from '../../../../Security/PasswordGenerator'

export interface SettingsState {
  passwordGen: PasswordGeneratorProps
}

const initialState: SettingsState = {
  passwordGen: {}
}

const SettingsReducer: Reducer<SettingsState, SettingsAction> = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsConstants.UPDATE_SETTINGS:
      return {
        ...state,
        ...action.newSettings
      }
    default:
      return state
  }
}

export default SettingsReducer