import { Action, ActionCreator } from 'redux'
import Password from '../../../../PasswordManager/Password'
import EntryGridConstants from './EntryGridConstants'
import store from '../../../index'

export interface EntryGridAction extends Action {
  currentPage: number
  totalPages: number
  items: Record<string, Password>
  keyword: string
}

const entryGridLoadData: ActionCreator<EntryGridAction> = (page: number, keyword: string) => {
  const perPage = 20
  const currentStore = store.getState()
  const category = currentStore.Data.SelectedCategory
  const keys = Object.keys(currentStore.Data.Passwords[category].entries).filter((item) => (
    currentStore.Data.Passwords[category].entries[item].name.includes(keyword)
    || currentStore.Data.Passwords[category].entries[item].url.toString().includes(keyword)
  ))

  const totalPages = Math.ceil(keys.length / perPage)
  const items: Record<string, Password> = {}
  const newCurrentPage: number = page || currentStore.UI.EntryGrid.currentPage

  keys.slice((newCurrentPage - 1) * perPage, newCurrentPage * perPage).forEach((key: string) => {
    items[key] = store.getState().Data.Passwords[category].entries[key]
  })

  return {
    type: EntryGridConstants.ENTRY_GRID_LOAD_DATA,
    currentPage: newCurrentPage,
    totalPages,
    items,
    keyword
  }
}

const EntryGridActions = {
  entryGridLoadData
}

export default EntryGridActions
