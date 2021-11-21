import React from 'react'
import { useDispatch } from 'react-redux'
import GlobalActions from '../../Redux/Store/UI/Global/GlobalActions'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ShortTextIcon from '@mui/icons-material/ShortText'
import FolderIcon from '@mui/icons-material/Folder'

export const AddFab = () => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNewEntry = () => {
    dispatch(GlobalActions.openNewEntryDialog())
    handleClose()
  }

  const handleNewCategory = () => {
    dispatch(GlobalActions.openNewCategoryDialog())
    handleClose()
  }

  const actions = [
    { icon: <ShortTextIcon />, name: 'New Entry', onClick: handleNewEntry },
    { icon: <FolderIcon />, name: 'New Category', onClick: handleNewCategory }
  ]

  return (
    <SpeedDial
      ariaLabel="Create ..."
      sx={{ position: 'fixed', bottom: 36, right: 36 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  )
}