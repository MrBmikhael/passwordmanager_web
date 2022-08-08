import { Action, ActionCreator } from 'redux'
import store from '../..'
import PasswordManager from '../../../PasswordManager'
import Password from '../../../PasswordManager/Password'
import AES from '../../../Security/AES'
import { DataConstants } from './DataConstants'

export interface DataAction extends Action {
  categoryName: string
  newCategoryName?: string
  newPasswordEntry?: Password
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

const createNewPasswordEntry: ActionCreator<DataAction> = (categoryName: string, entryUser: string, entryPass: string, url: string, name: string, masterPassword: string) => {
  const randomID = `_${Math.random().toString(36).substring(2, 16)}`
  const nowDate = new Date()
  const newPasswordEntry: Password = {
    name,
    url,
    id: randomID,
    user: AES.encrypt(entryUser, masterPassword),
    pass: AES.encrypt(entryPass, masterPassword),
    created: nowDate,
    updated: nowDate
  }

  const content = AES.encrypt(JSON.stringify(newPasswordEntry), masterPassword)
  PasswordManager.getInstance().addPassword(`${categoryName}${newPasswordEntry.id}`, content)

  return {
    type: DataConstants.PasswordEntryConstants.CREATE_PASSWORD_ENTRY, categoryName, newPasswordEntry
  }
}

const deletePasswordEntry: ActionCreator<DataAction> = (categoryName: string, entryId: string) => ({
  type: DataConstants.PasswordEntryConstants.DELETE_PASSWORD_ENTRY, categoryName, entryId
})

const updatePasswordEntry: ActionCreator<DataAction> = (categoryName: string, entryId: string, name: string, user: string, pass: string, url: string) => {
  const state = store.getState()
  const updatedPasswordEntry: Password = state.Data.Passwords[state.Data.SelectedCategory].entries[entryId]
  updatedPasswordEntry.name = name
  updatedPasswordEntry.updated = new Date()
  updatedPasswordEntry.user = user
  updatedPasswordEntry.pass = pass
  updatedPasswordEntry.url = url

  return {
    type: DataConstants.PasswordEntryConstants.UPDATE_PASSWORD_ENTRY, categoryName, newPasswordEntry: updatedPasswordEntry
  }
}

const CategoryActions = { createNewCategory, deleteCategory, changeSelectedCategory }
const EntryActions = { createNewPasswordEntry, deletePasswordEntry, updatePasswordEntry }

const DataActions = { EntryActions, CategoryActions }
export default DataActions
