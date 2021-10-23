import React from 'react';
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { RootState } from '../../Redux/Reducers/index'
import { useSelector } from 'react-redux';
import { AlertStatus } from '../../Redux/Constants/AlertConstants';

export interface AlertSnackbarProps {
  message: string
  status: AlertStatus
  delay?: number
}

export const AlertSnackbar = (props: AlertSnackbarProps) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      TransitionComponent={Slide}
      autoHideDuration={props.delay || 5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
      message={props.message}
      action={action}
    />
  );
}

export const GlobalAlertSnackbar = () => {
  const state = useSelector((state: RootState) => state.Alert)
  if (state.message !== "") {
    return <AlertSnackbar message={state.message} status={state.status} />
  }
  return <></>
}
