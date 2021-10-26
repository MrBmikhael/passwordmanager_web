import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { CreateCategory } from '../CreateCategory/CreateCategory'
import { CreateEntry } from '../CreateEntry/CreateEntry'

export const Dialogs = () => {
  const state = useSelector((state: RootState) => state.UI.Dialog)

  return (
    <>
      <CreateCategory isOpen={state.NewCategory} />
      <CreateEntry isOpen={state.NewEntry} />
    </>
  )
}