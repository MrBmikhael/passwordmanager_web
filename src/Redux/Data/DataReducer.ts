import _ from 'lodash'
import { Reducer } from 'redux'
import { DataAction } from './DataActions'
import { DataConstants } from './DataConstants'

export interface Entry {
  id: string
  user: string
  pass: string
}

export interface Category {
  name: string
  entries: Entry[] // Record<string, Entry>
}

export interface DataState {
  Data: Record<string, Category>
  SelectedCategory: string
}

const initialState = (): DataState => {
  const defaultCategory: Category = { name: 'Default', entries: [] }
  return (
    {
      Data: {
        [defaultCategory.name]: defaultCategory
      },
      SelectedCategory: defaultCategory.name
    }
  )
}

export const DataReducer: Reducer<DataState, DataAction> = (state = initialState(), action: DataAction) => {
  switch (action.type) {
    case DataConstants.EntryConstants.CREATE_ENTRY:
      const user = _.get(action, 'entry_user')
      const pass = _.get(action, 'entry_pass', '')
      if (user) {
        // temp
        const id: string = '_' + Math.random().toString(36).substr(2, 9) // generate random id
        const newEntry: Entry = { id, user, pass }
        const SelectedCategory: string = state.SelectedCategory
        const SelectedCategoryData: Category = state.Data[SelectedCategory]
        const newEntries = [...SelectedCategoryData.entries]
        newEntries.push(newEntry)

        return {
          ...state,
          Data: {
            ...state.Data,
            [SelectedCategory]: { name: SelectedCategory, entries: newEntries }
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
          [action.category_name]: { name: action.category_name, entries: [] }
        }
      }
    default:
      return state
  }

}
