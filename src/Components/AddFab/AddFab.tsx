import React from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ShortTextIcon from '@mui/icons-material/ShortText'
import FolderIcon from '@mui/icons-material/Folder'

const actions = [
  { icon: <ShortTextIcon />, name: 'New Credential' },
  { icon: <FolderIcon />, name: 'New Category' }
]

export const AddFab = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <SpeedDial
      ariaLabel="SpeedDial uncontrolled open example"
      sx={{ position: 'absolute', bottom: 36, right: 36 }}
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
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  )
}