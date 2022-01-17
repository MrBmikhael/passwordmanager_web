import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

interface onClickProps {
  anchorEl: null | HTMLElement
  onClose: () => void
  onEdit: () => void
  onDelete: () => void
}

function ContextMenu(props: onClickProps): React.ReactElement {
  const {
    onClose, onEdit, onDelete, anchorEl
  } = props

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onEdit}>
        Edit
      </MenuItem>
      <MenuItem onClick={onDelete}>
        Delete
      </MenuItem>
    </Menu>
  )
}

export default ContextMenu
