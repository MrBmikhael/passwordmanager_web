import React from 'react'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { RootState } from '../../Redux/Reducers/index'
import { useSelector } from 'react-redux'
import { AlertStatus } from '../../Redux/Constants/UIConstants'

export interface AlertSnackbarProps {
  message: string
  status: AlertStatus
  delay?: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

Alert.displayName = 'Alert'

export const AlertSnackbar = (props: AlertSnackbarProps) => {
  const [open, setOpen] = React.useState(true)

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Snackbar
      open={open}
      TransitionComponent={Slide}
      autoHideDuration={props.delay || 3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
      action={action}
    >
      <Alert onClose={handleClose} severity={props.status} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export const GlobalAlertSnackbar = () => {
  const state = useSelector((state: RootState) => state.UI.Snackbar)
  if (state.message !== '') {
    return <AlertSnackbar message={state.message} status={state.status} />
  }
  return <></>
}
