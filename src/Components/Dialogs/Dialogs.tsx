import React, { useState } from 'react'
import { CreateCategory } from '../CreateCategory/CreateCategory'
import { CreateEntry } from '../CreateEntry/CreateEntry'

export const Dialogs = () => {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [entryOpen, setEntryOpen] = useState(false)

  const closeEntry = () => {
    setEntryOpen(!entryOpen)
  }

  const closeCategory = () => {
    setCategoryOpen(!categoryOpen)
  }

  return (
    <>
      <CreateCategory isOpen={categoryOpen} handleClose={closeCategory} />
      <CreateEntry isOpen={entryOpen} handleClose={closeEntry} />
    </>
  )
}