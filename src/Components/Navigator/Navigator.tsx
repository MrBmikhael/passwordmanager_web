import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { MainAppBar } from '../MainAppBar/MainAppBar'
import { AddFab } from '../AddFab/AddFab'
import { NavDrawer } from '../NavDrawer/NavDrawer'
import { Dialogs } from '../Dialogs/Dialogs'
import EntryGrid from '../EntryGrid/EntryGrid'
// import { EntryTable } from '../EntryTable/EntryTable'

export const Navigator = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Dialogs />
      <CssBaseline />
      <MainAppBar />
      <NavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <EntryGrid />
        <AddFab />
      </Box>
    </Box>
  )
}