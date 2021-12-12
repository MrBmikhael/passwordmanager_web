import { Action, ActionCreator } from 'redux'
import { Entry } from '../../Data/DataReducer'
import EntryGridConstants from './EntryGridConstants'
import store from '../../../index'

export interface EntryGridAction extends Action {
  current_page: number
  total_pages: number
  items: Record<string, Entry>
}

const entryGridLoadData: ActionCreator<EntryGridAction> = (page: number = 1) => {
  const perPage = 20
  const currentStore = store.getState()
  const category = currentStore.Data.SelectedCategory
  const keys = Object.keys(currentStore.Data.Passwords[category].entries)
  const total_pages = Math.ceil(keys.length / perPage)
  const items: Record<string, Entry> = {}
  keys.slice((page - 1) * perPage, page * perPage).forEach((key: string) => {
    items[key] = store.getState().Data.Passwords[category].entries[key]
  })

  return {
    type: EntryGridConstants.ENTRY_GRID_LOAD_DATA,
    total_pages,
    items,
    current_page: page
  }
}

const EntryGridActions = {
  entryGridLoadData
}

export default EntryGridActions