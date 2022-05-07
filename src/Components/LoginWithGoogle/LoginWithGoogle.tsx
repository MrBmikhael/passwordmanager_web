/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import _ from 'lodash'
import {
  GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, useGoogleLogin, UseGoogleLoginResponse, useGoogleLogout, UseGoogleLogoutResponse
} from 'react-google-login'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import { SnackbarAlertStatus } from '../../Redux/Store/UI/Snackbar/SnackbarConstants'
import SnackbarActions from '../../Redux/Store/UI/Snackbar/SnackbarActions'
import AuthActions from '../../Redux/Store/User/Auth/AuthActions'
import PasswordManager from '../../PasswordManager'
import GlobalActions from '../../Redux/Store/UI/Global/GlobalActions'

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

const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline, dispatch: (arg0: any) => void): void => {
  dispatch(AuthActions.loginUsingGoogle(response))
  dispatch(SnackbarActions.viewSnackbarAlert(SnackbarAlertStatus.success, 'Google Login Successful'))

  PasswordManager.getInstance().initializeUser().then(() => {
    // Ask for master password
    dispatch(GlobalActions.openMasterPasswordDialog())
    PasswordManager.getInstance().getPasswords()
  }).catch(() => {
    // Create a master password
    dispatch(GlobalActions.openSetNewUserDialog())
  })
}

const onFailure = (response: GoogleLoginResponse, dispatch: (arg0: any) => void): void => {
  dispatch(SnackbarActions.viewSnackbarAlert(SnackbarAlertStatus.error, 'Google Login Failed'))
}

export function LoginWithGoogle(): React.ReactElement {
  const dispatch = useDispatch()
  const {
    clientId, cookiePolicy, scope, isSignedIn
  } = GoogleLoginProps

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        cookiePolicy={cookiePolicy}
        scope={scope}
        isSignedIn={isSignedIn}
        render={(renderProps) => (
          <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
            <Stack direction="row" spacing={1}>
              <GoogleIcon />
              <Typography>Sign in with Google</Typography>
            </Stack>
          </Button>
        )}
        onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => (onSuccess(response, dispatch))}
        onFailure={(response: GoogleLoginResponse) => (onFailure(response, dispatch))}
      />
    </div>
  )
}

export const useLogin = (): UseGoogleLoginResponse => {
  const dispatch = useDispatch()
  const events = {
    onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => (onSuccess(response, dispatch)),
    onFailure: (response: GoogleLoginResponse) => (onFailure(response, dispatch))
  }
  return useGoogleLogin({ ...GoogleLoginProps, ...events })
}

export const useLogout = (): UseGoogleLogoutResponse => {
  const dispatch = useDispatch()
  const events = {
    onLogoutSuccess: () => dispatch(AuthActions.logout())
  }
  return useGoogleLogout({ ...GoogleLoginProps, ...events })
}

function LogoutToolbarButtons(renderProps: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }): React.ReactElement {
  const { onClick } = renderProps
  return <Tooltip title="Logout" arrow><IconButton size="large" edge="end" color="inherit" onClick={onClick}><LogoutIcon /></IconButton></Tooltip>
}

export function Logout(): React.ReactElement {
  const dispatch = useDispatch()
  const onLogoutSuccess = (): void => {
    dispatch(AuthActions.logout())
  }

  const { clientId } = GoogleLoginProps

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        render={LogoutToolbarButtons}
        onLogoutSuccess={onLogoutSuccess}
        buttonText="Logout"
      />
    </div>
  )
}
