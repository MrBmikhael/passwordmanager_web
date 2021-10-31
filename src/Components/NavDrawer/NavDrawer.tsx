import React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { DataActions } from '../../Redux/Actions/DataActions'

const drawerWidth: number = 240

export const NavDrawer = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state: RootState) => (state.Data.Data))
  const selectedCat = useSelector((state: RootState) => (state.Data.SelectedCategory))

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string) => {
    dispatch(DataActions.CategoryActions.changeSelectedCategory(newKey))
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
          {
            Object.keys(categories).map((category_name: string) => {
              return (
                <ListItem button key={category_name} onClick={(event) => handleListItemClick(event, category_name)}>
                  <ListItemIcon>
                    {(selectedCat === category_name) ? <FolderOpenIcon /> : <FolderIcon />}
                  </ListItemIcon>
                  <ListItemText primary={category_name} />
                </ListItem>
              )
            })
          }
        </List>
        <Divider />
      </Box>
    </Drawer>
  )
}