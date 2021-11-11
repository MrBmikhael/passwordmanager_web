import _ from 'lodash'
import { Reducer } from 'redux'
import { DataAction } from './DataActions'
import { DataConstants } from './DataConstants'

export interface Entry {
  id: string
  user: string
  pass: string
  url: string
}

export interface Category {
  entries: Record<string, Entry>
}

export interface DataState {
  Data: Record<string, Category>
  SelectedCategory: string
}

const initialState = (): DataState => {
  const defaultCategory: Category = { entries: {} }
  const defaultCategoryName: string = "Default"
  return (
    {
      Data: {
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

      if (user) {
        const id: string = '_' + Math.random().toString(36).substr(2, 16)
        const newEntry: Entry = { id, user, pass, url }
        const SelectedCategory: string = state.SelectedCategory
        state.Data[SelectedCategory].entries[id] = newEntry

        return {
          ...state,
          Data: {
            ...state.Data,
            [SelectedCategory]: { entries: state.Data[SelectedCategory].entries }
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
        Data: {
          ...state.Data,
          [action.category_name]: { entries: {} }
        }
      }
    default:
      return state
  }

}

export default DataReducer