import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { MainAppBar } from '../MainAppBar/MainAppBar'
import { AddFab } from '../AddFab/AddFab'
import { NavDrawer } from '../NavDrawer/NavDrawer'
import { Dialogs } from '../Dialogs/Dialogs'

export const Navigator = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Dialogs />
      <CssBaseline />
      <MainAppBar />
      <NavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit.
          </Typography>
          <AddFab />
        </div>
      </Box>
    </Box>
  )
}