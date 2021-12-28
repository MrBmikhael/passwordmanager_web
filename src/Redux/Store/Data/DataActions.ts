import { Action, ActionCreator } from 'redux'
import { DataConstants } from './DataConstants'

export interface DataAction extends Action {
  categoryName: string
  newCategoryName?: string
  entryUser?: string
  entryPass?: string
  entryId?: string
  url?: string
}

const createNewCategory: ActionCreator<DataAction> = (categoryName: string) => ({
  type: DataConstants.CategoryConstants.CREATE_CATEGORY, categoryName
})
const deleteCategory: ActionCreator<DataAction> = (categoryName: string) => ({
  type: DataConstants.CategoryConstants.DELETE_CATEGORY, categoryName
})
const changeSelectedCategory: ActionCreator<DataAction> = (categoryName: string) => ({
  type: DataConstants.CategoryConstants.CHANGE_SELECTED_CATEGORY, categoryName
})

const createNewEntry: ActionCreator<DataAction> = (categoryName: string, entryUser: string, entryPass: string, url: string, name: string, masterPassword: string) => ({
  type: DataConstants.EntryConstants.CREATE_ENTRY, categoryName, entryUser, entryPass, url, name, masterPassword
})
const deleteEntry: ActionCreator<DataAction> = (categoryName: string, entryId: string) => ({
  type: DataConstants.EntryConstants.DELETE_ENTRY, categoryName, entryId
})

const CategoryActions = { createNewCategory, deleteCategory, changeSelectedCategory }
const EntryActions = { createNewEntry, deleteEntry }

const DataActions = { EntryActions, CategoryActions }
export default DataActions
