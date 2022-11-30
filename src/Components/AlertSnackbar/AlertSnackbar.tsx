import React from 'react'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux'
import { SnackbarAlertStatus } from '../../Redux/Store/UI/Snackbar/SnackbarConstants'

export interface AlertSnackbarProps {
  message: string
  status: SnackbarAlertStatus
  delay?: number
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref): React.ReactElement => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />)

Alert.displayName = 'Alert'

function AlertSnackbar(props: AlertSnackbarProps): React.ReactElement {
  const [open, setOpen] = React.useState(true)

  const handleClose = (event: Event | React.SyntheticEvent<unknown, Event>, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  )

  const { delay, status, message } = props

  return (
    <Snackbar
      open={open}
      TransitionComponent={Slide}
      autoHideDuration={delay || 2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
      action={action}
    >
      <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

function GlobalAlertSnackbar(): React.ReactElement {
  const globalAlertState = useSelector((state: RootState) => state.UI.Snackbar)
  if (globalAlertState.message !== '') {
    return <AlertSnackbar message={globalAlertState.message} status={globalAlertState.status} />
  }
  return <span />
}

AlertSnackbar.defaultProps = {
  delay: 200
}

export { GlobalAlertSnackbar, AlertSnackbar }
