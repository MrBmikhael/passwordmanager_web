import _ from 'lodash'
import { Reducer } from 'redux'
import Password from '../../../PasswordManager/Password'
import { DataAction } from './DataActions'
import { DataConstants } from './DataConstants'

export interface Category {
  entries: Record<string, Password>
}

export interface DataState {
  Passwords: Record<string, Category>
  Files: Record<string, Category>
  SelectedCategory: string
}

const initialState = (): DataState => {
  const defaultCategory: Category = { entries: {} }
  const defaultCategoryName = 'General'
  return (
    {
      Passwords: {
        [defaultCategoryName]: defaultCategory
      },
      Files: {
        [defaultCategoryName]: defaultCategory
      },
      SelectedCategory: defaultCategoryName
    }
  )
}

const DataReducer: Reducer<DataState, DataAction> = (state = initialState(), action: DataAction) => {
  switch (action.type) {
    case DataConstants.PasswordEntryConstants.CREATE_PASSWORD_ENTRY: {
      if (action.newPasswordEntry == null) return state
      const { SelectedCategory } = state
      const newState = _.cloneDeep(state)
      newState.Passwords[SelectedCategory].entries[action.newPasswordEntry.id] = action.newPasswordEntry
      return newState
    }
    case DataConstants.CategoryConstants.CHANGE_SELECTED_CATEGORY: {
      if (state.SelectedCategory !== action.categoryName) {
        const newState = _.cloneDeep(state)
        newState.SelectedCategory = action.categoryName
        return newState
      }
      return state
    }
    case DataConstants.CategoryConstants.CREATE_CATEGORY: {
      const newState = _.cloneDeep(state)
      newState.Passwords[action.categoryName] = { entries: {} }
      return newState
    }
    default:
      return state
  }
}

export default DataReducer
