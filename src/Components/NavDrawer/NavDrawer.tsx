import React, { useState } from 'react'
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

const drawerWidth: number = 240

export const NavDrawer = () => {
  const [selectedIndex, setIndex] = useState('Default')
  const categories = [
    { key: 'Default', primary: "Default" },
    { key: 'test_cat', primary: "Test Cat" },
    { key: 'test_cat_2', primary: "Test Cat" },
    { key: 'test_cat_3', primary: "Test Cat" }
  ]

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newKey: string) => {
    setIndex(newKey)
    // Load 'newKey' category
  }

  console.log(selectedIndex)

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
            categories.map((category) => {
              return (
                <ListItem button key={category.key} onClick={(event) => handleListItemClick(event, category.key)}>
                  <ListItemIcon>
                    {(selectedIndex === category.key) ? <FolderOpenIcon /> : <FolderIcon />}
                  </ListItemIcon>
                  <ListItemText primary={category.primary} />
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