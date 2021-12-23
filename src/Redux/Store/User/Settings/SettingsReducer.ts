import { Reducer } from 'redux'
import SettingsConstants from './SettingsConstants'
import { SettingsAction } from './SettingsActions'
import { PasswordGeneratorProps } from '../../../../Security/PasswordGenerator'
import _ from 'lodash'

export interface SettingsState {
  passwordGenerator: PasswordGeneratorProps
}

const initialState: SettingsState = {
  passwordGenerator: {
    length: 10,
    uppercase: true,
    lowercase: true,
    excludeSimilarCharacters: false,
    symbols: false
  }
}

const SettingsReducer: Reducer<SettingsState, SettingsAction> = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsConstants.UPDATE_SETTINGS:
      const newState = _.cloneDeep(state)
      newState.passwordGenerator = { ...action.newSettings.passwordGenerator }
      return newState
    default:
      return state
  }
}

export default SettingsReducer