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
  const defaultCategoryName: string = "General"
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
    case DataConstants.EntryConstants.CREATE_ENTRY:
      const user = _.get(action, 'entry_user')
      const pass = _.get(action, 'entry_pass', '')
      const url = _.get(action, 'url', '')
      const name = _.get(action, 'name', '')
      const masterPassword = _.get(action, 'masterPassword', '')

      if (user) {
        const id: string = '_' + Math.random().toString(36).substring(2, 16)
        const encrypted = AES.encrypt(JSON.stringify({ id, user, pass, url, name }), masterPassword)
        const newEntry: Entry = { id, user, pass, url, name, encrypted }
        const SelectedCategory: string = state.SelectedCategory
        state.Passwords[SelectedCategory].entries[id] = newEntry

        return {
          ...state,
          Passwords: {
            ...state.Passwords,
            [SelectedCategory]: { entries: state.Passwords[SelectedCategory].entries }
          }
        }
      }
      return state
    case DataConstants.CategoryConstants.CHANGE_SELECTED_CATEGORY:
      return {
        ...state,
        SelectedCategory: action.category_name
      }
    case DataConstants.CategoryConstants.CREATE_CATEGORY:
      return {
        ...state,
        Passwords: {
          ...state.Passwords,
          [action.category_name]: { entries: {} }
        }
      }
    default:
      return state
  }

}

export default DataReducer