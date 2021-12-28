import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux'
import { CreateCategory } from './CreateCategory/CreateCategory'
import { CreateEntry } from './CreateEntry/CreateEntry'
import { GoogleAuth } from './GoogleAuth/GoogleAuth'
import { MasterPassword } from './MasterPassword/MasterPassword'
import { UserSettings } from './UserSettings/UserSettings'

export function Dialogs(): React.ReactElement {
  const dialogsState = useSelector((state: RootState) => state.UI.Global)

  return (
    <>
      <GoogleAuth />
      <CreateCategory isOpen={dialogsState.NewCategory} />
      <CreateEntry isOpen={dialogsState.NewEntry} />
      <MasterPassword isOpen={dialogsState.MasterPassword} />
      <UserSettings isOpen={dialogsState.UserSettings} />
    </>
  )
}
