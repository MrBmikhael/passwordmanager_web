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
import { RootState } from '../../Redux'
import DataActions from '../../Redux/Store/Data/DataActions'
import ListItemButton from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const drawerWidth: number = 240

interface expansionState {
  Passwords: boolean,
  Files: boolean
}

const initialExpansionState: expansionState = {
  Passwords: true,
  Files: false
}

export const NavDrawer = () => {
  const dispatch = useDispatch()
  const passwordsCategories = useSelector((state: RootState) => (state.Data.Passwords))
  const filesCategories = useSelector((state: RootState) => (state.Data.Files))
  const selectedCat = useSelector((state: RootState) => (state.Data.SelectedCategory))

  const [expansionState, setExpansion] = useState(initialExpansionState)

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string) => {
    dispatch(DataActions.CategoryActions.changeSelectedCategory(newKey))
  }

  const handleListExpansion = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string) => {
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
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
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
                Object.keys(passwordsCategories).map((category_name: string) => {
                  return (
                    <ListItem button key={category_name} onClick={(event) => handleListItemClick(event, category_name)} sx={{ pl: 4, height: 56 }}>
                      <ListItemIcon>
                        {(selectedCat === category_name) ? <FolderOpenIcon /> : <FolderIcon />}
                      </ListItemIcon>
                      <ListItemText primary={category_name} />
                    </ListItem>
                  )
                })
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
                Object.keys(filesCategories).map((category_name: string) => {
                  return (
                    <ListItem button key={category_name} onClick={(event) => handleListItemClick(event, category_name)} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {(selectedCat === category_name) ? <FolderOpenIcon /> : <FolderIcon />}
                      </ListItemIcon>
                      <ListItemText primary={category_name} />
                    </ListItem>
                  )
                })
              }
            </List>
          </Collapse>
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
}