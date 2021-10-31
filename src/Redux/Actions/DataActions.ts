import { Action, ActionCreator } from 'redux'
import { DataConstants } from '../Constants/DataConstants'

export interface DataAction extends Action {
  category_name: string
  new_category_name?: string
  entry_user?: string
  entry_pass?: string
  entry_id?: string
}

const createNewCategory: ActionCreator<DataAction> = (category_name: string) => ({
  type: DataConstants.CategoryConstants.CREATE_CATEGORY, category_name
})
const deleteCategory: ActionCreator<DataAction> = (category_name: string) => ({
  type: DataConstants.CategoryConstants.DELETE_CATEGORY, category_name
})
const changeSelectedCategory: ActionCreator<DataAction> = (category_name: string) => ({
  type: DataConstants.CategoryConstants.CHANGE_SELECTED_CATEGORY, category_name
})

const createNewEntry: ActionCreator<DataAction> = (category_name: string, entry_user: string, entry_pass: string) => ({
  type: DataConstants.EntryConstants.CREATE_ENTRY, category_name, entry_user, entry_pass
})
const deleteEntry: ActionCreator<DataAction> = (category_name: string, entry_id: string) => ({
  type: DataConstants.EntryConstants.DELETE_ENTRY, category_name, entry_id
})

const CategoryActions = { createNewCategory, deleteCategory, changeSelectedCategory }
const EntryActions = { createNewEntry, deleteEntry }

export const DataActions = { EntryActions, CategoryActions }
