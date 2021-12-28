import { Reducer } from 'redux'
import EntryGridConstants from './EntryGridConstants'
import { EntryGridAction } from './EntryGridActions'
import { Entry } from '../../Data'

export interface EntryGridState {
  current_page: number
  total_pages: number
  items: Record<string, Entry>
  keyword: string
}

const initialState = {
  current_page: 1,
  total_pages: 0,
  items: {},
  keyword: ''
}

const EntryGridReducer: Reducer<EntryGridState, EntryGridAction> = (state = initialState, action: EntryGridAction) => {
  switch (action.type) {
    case EntryGridConstants.ENTRY_GRID_LOAD_DATA:
      return {
        total_pages: action.total_pages,
        current_page: action.current_page,
        items: action.items,
        keyword: action.keyword
      }
    default:
      return state
  }
}

export default EntryGridReducer