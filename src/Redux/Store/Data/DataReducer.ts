import _ from 'lodash'
import { Reducer } from 'redux'
import AES from '../../../Security/AES'
import { DataAction } from './DataActions'
import { DataConstants } from './DataConstants'

export interface Entry {
  id: string
  name: string
  user: string
  pass: string
  url: string
  encrypted: string
}

export interface Category {
  entries: Record<string, Entry>
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
    case DataConstants.EntryConstants.CREATE_ENTRY: {
      const user = _.get(action, 'entryUser')
      const pass = _.get(action, 'entryPass', '')
      const url = _.get(action, 'url', '')
      const name = _.get(action, 'name', '')
      const masterPassword = _.get(action, 'masterPassword', '')

      if (user) {
        const id = `_${Math.random().toString(36).substring(2, 16)}`
        const encrypted = AES.encrypt(JSON.stringify({
          id, user, pass, url, name
        }), masterPassword)
        const newEntry: Entry = {
          id, user, pass, url, name, encrypted
        }
        const { SelectedCategory } = state
        const newState = _.cloneDeep(state)
        newState.Passwords[SelectedCategory].entries[id] = newEntry
        return newState
      }

      return state
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
