import React from 'react'
import { useDispatch } from 'react-redux'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ShortTextIcon from '@mui/icons-material/ShortText'
import FolderIcon from '@mui/icons-material/Folder'
import GlobalActions from '../../Redux/Store/UI/Global/GlobalActions'

export function AddFab(): React.ReactElement {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleNewEntry = (): void => {
    dispatch(GlobalActions.openNewEntryDialog())
    handleClose()
  }

  const handleNewCategory = (): void => {
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
