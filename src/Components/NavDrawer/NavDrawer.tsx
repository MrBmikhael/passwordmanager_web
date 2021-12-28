import React, { useState } from 'react'
import _ from 'lodash'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import PasswordIcon from '@mui/icons-material/Password'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import Toolbar from '@mui/material/Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import ListItemButton from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import DataActions from '../../Redux/Store/Data/DataActions'
import Store, { RootState } from '../../Redux'
import EntryGridActions from '../../Redux/Store/UI/EntryGrid/EntryGridActions'

const drawerWidth = 240

interface expansionState {
  Passwords: boolean,
  Files: boolean
}

const initialExpansionState: expansionState = {
  Passwords: true,
  Files: false
}

export function NavDrawer(): React.ReactElement {
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => (state.Data))

  const [expansionState, setExpansion] = useState(initialExpansionState)

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string): void => {
    if (userData.SelectedCategory !== newKey) {
      dispatch(DataActions.CategoryActions.changeSelectedCategory(newKey))
      dispatch(EntryGridActions.entryGridLoadData(1, Store.getState().UI.EntryGrid.keyword))
    }
  }

  const handleListExpansion = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string): void => {
    setExpansion((state) => ({
      ...state,
      [newKey]: !_.get(state, newKey)
    }))
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItemButton onClick={(event) => handleListExpansion(event, 'Passwords')}>
            <ListItemIcon>
              <PasswordIcon />
            </ListItemIcon>
            <ListItemText primary="Passwords" />
            {expansionState.Passwords ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expansionState.Passwords} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                Object.keys(userData.Passwords).map((categoryName: string) => (
                  <ListItem button key={categoryName} onClick={(event) => handleListItemClick(event, categoryName)} sx={{ pl: 4, height: 56 }}>
                    <ListItemIcon>
                      {(userData.SelectedCategory === categoryName) ? <FolderOpenIcon /> : <FolderIcon />}
                    </ListItemIcon>
                    <ListItemText primary={categoryName} />
                  </ListItem>
                ))
              }
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={(event) => handleListExpansion(event, 'Files')}>
            <ListItemIcon>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary="Files" />
            {expansionState.Files ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expansionState.Files} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                Object.keys(userData.Files).map((categoryName: string) => (
                  <ListItem button key={categoryName} onClick={(event) => handleListItemClick(event, categoryName)} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {(userData.SelectedCategory === categoryName) ? <FolderOpenIcon /> : <FolderIcon />}
                    </ListItemIcon>
                    <ListItemText primary={categoryName} />
                  </ListItem>
                ))
              }
            </List>
          </Collapse>
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
}
