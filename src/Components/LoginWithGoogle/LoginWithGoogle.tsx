import React from 'react'
import _ from 'lodash'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import AuthActions from '../../Redux/User/Auth/AuthActions'
import SnackbarActions from '../../Redux/UI/Snackbar/SnackbarActions'
import { SnackbarAlertStatus } from '../../Redux/UI/Snackbar/SnackbarConstants'
import GoogleDriveAPI from '../../DataHandler/CloudStorage/GoogleDriveAPI'

const scopes = [
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
  GoogleDriveAPI.getInstance().createInitialFiles()
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
        onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => (onSuccess(response, dispatch))}
        onFailure={(response: GoogleLoginResponse) => (onFailure(response, dispatch))}
      />
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
      <GoogleLogout {...GoogleLoginProps} onLogoutSuccess={onSuccess} buttonText="Logout" />
    </div>
  )
}
