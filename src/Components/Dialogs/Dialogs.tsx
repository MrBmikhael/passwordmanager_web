import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux'
import { CreateCategory } from './CreateCategory/CreateCategory'
import { CreateEntry } from './CreateEntry/CreateEntry'
import { MasterPassword } from './MasterPassword/MasterPassword'
import { UserSettings } from './UserSettings/UserSettings'

export const Dialogs = () => {
  const state = useSelector((state: RootState) => state.UI.Global)

  return (
    <>
      <CreateCategory isOpen={state.NewCategory} />
      <CreateEntry isOpen={state.NewEntry} />
      <MasterPassword isOpen={state.MasterPassword} />
      <UserSettings isOpen={state.UserSettings} />
    </>
  )
}