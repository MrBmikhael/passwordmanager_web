import React from 'react'
import _ from 'lodash'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import AuthActions from '../../Redux/Store/User/Auth/AuthActions'
import SnackbarActions from '../../Redux/Store/UI/Snackbar/SnackbarActions'
import { SnackbarAlertStatus } from '../../Redux/Store/UI/Snackbar/SnackbarConstants'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import GoogleDriveAPI from '../../GoogleDriveAPI'

export const scopes = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.appdata'
]

const GoogleLoginProps = {
  clientId: _.get(process.env, 'REACT_APP_GOOGLE_CLIENT_ID', ''),
  cookiePolicy: 'single_host_origin',
  scope: scopes.join(' '),
  isSignedIn: true
}

const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline, dispatch: (arg0: any) => void) => {
  dispatch(AuthActions.loginUsingGoogle(response))
  dispatch(SnackbarActions.viewSnackbarAlert(SnackbarAlertStatus.success, 'Google Login Successful'))
  const gdrive = GoogleDriveAPI.getInstance()
  if (gdrive) {
    gdrive.createInitialFiles().catch((e: any) => console.error(e))
  }
}

const onFailure = (response: GoogleLoginResponse, dispatch: (arg0: any) => void) => {
  console.error(response)
  dispatch(SnackbarActions.viewSnackbarAlert(SnackbarAlertStatus.error, 'Google Login Failed'))
}

export const LoginWithGoogle = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <GoogleLogin
        {...GoogleLoginProps}
        render={(renderProps) => <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant='contained'><Stack direction="row" spacing={1}><GoogleIcon /><Typography>Sign in with Google</Typography></Stack></Button>}
        onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => (onSuccess(response, dispatch))}
        onFailure={(response: GoogleLoginResponse) => (onFailure(response, dispatch))}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogin>
    </div>
  )
}

export const useLogin = () => {
  const dispatch = useDispatch()
  const events = {
    onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => (onSuccess(response, dispatch)),
    onFailure: (response: GoogleLoginResponse) => (onFailure(response, dispatch))
  }
  return useGoogleLogin(Object.assign({}, GoogleLoginProps, events))
}

export const useLogout = () => {
  const dispatch = useDispatch()
  const events = {
    onLogoutSuccess: () => dispatch(AuthActions.logout()),
  }
  return useGoogleLogout(Object.assign({}, GoogleLoginProps, events))
}

export const Logout = () => {
  const dispatch = useDispatch()
  const onSuccess = () => {
    dispatch(AuthActions.logout())
  }
  return (
    <div>
      <GoogleLogout {...GoogleLoginProps} render={(renderProps) => <Tooltip title={"Logout"} arrow><IconButton size="large" edge="end" color="inherit" onClick={renderProps.onClick}><LogoutIcon /></IconButton></Tooltip>} onLogoutSuccess={onSuccess} buttonText="Logout" />
    </div>
  )
}
