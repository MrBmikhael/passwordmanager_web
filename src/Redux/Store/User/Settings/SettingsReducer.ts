import { Reducer } from 'redux'
import _ from 'lodash'
import { SettingsAction } from './SettingsActions'
import { PasswordGeneratorProps } from '../../../../Security/PasswordGenerator'
import SettingsConstants from './SettingsConstants'

export interface SettingsState {
  passwordGenerator: PasswordGeneratorProps
  security: {
    timeout: number
    expire: number
  }
}

const initialState: SettingsState = {
  passwordGenerator: {
    length: 10,
    uppercase: true,
    lowercase: true,
    symbols: false,
    numbers: false,
    exclude: ''
  },
  security: {
    timeout: 30,
    expire: 365
  }
}

const SettingsReducer: Reducer<SettingsState, SettingsAction> = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsConstants.UPDATE_SETTINGS: {
      const newState = _.cloneDeep(state)
      newState.passwordGenerator = { ...action.newSettings.passwordGenerator }
      newState.security = { ...action.newSettings.security }
      return newState
    }
    default:
      return state
  }
}

export default SettingsReducer
