import { Reducer } from 'redux'
import EntryGridConstants from './EntryGridConstants'
import { EntryGridAction } from './EntryGridActions'
import Password from '../../../../PasswordManager/Password'

export interface EntryGridState {
  currentPage: number
  totalPages: number
  items: Record<string, Password>
  keyword: string
}

const initialState = {
  currentPage: 1,
  totalPages: 0,
  items: {},
  keyword: ''
}

const EntryGridReducer: Reducer<EntryGridState, EntryGridAction> = (state = initialState, action: EntryGridAction) => {
  switch (action.type) {
    case EntryGridConstants.ENTRY_GRID_LOAD_DATA:
      return {
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        items: action.items,
        keyword: action.keyword
      }
    default:
      return state
  }
}

export default EntryGridReducer
