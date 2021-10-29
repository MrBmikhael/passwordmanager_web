import React from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { UIActions } from '../../Redux/Actions/UIActions'
import { UserActions } from '../../Redux/Actions/UserActions'
import { AlertStatus } from '../../Redux/Constants/UIConstants'

const GoogleLoginProps = {
  clientId: '952024862678-rka3ij8bqmpr6qps23n72a7b72mjpkep.apps.googleusercontent.com',
  cookiePolicy: 'single_host_origin',
  redirectUri: 'https://mrbmikhael.github.io/passwordmanager_web/',
  scope: 'https://www.googleapis.com/auth/drive.appdata',
  isSignedIn: true
}

const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline, dispatch: (arg0: any) => void) => {
  dispatch(UserActions.google_login(response))
  dispatch(UIActions.addAlert(AlertStatus.success, 'Google Login Successful'))
}

const onFailure = (response: GoogleLoginResponse, dispatch: (arg0: any) => void) => {
  console.error(response)
  dispatch(UIActions.addAlert(AlertStatus.error, 'Google Login Failed'))
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
    onLogoutSuccess: () => dispatch(UserActions.clear()),
  }
  return useGoogleLogout(Object.assign({}, GoogleLoginProps, events))
}

export const Logout = () => {
  const dispatch = useDispatch()
  const onSuccess = () => {
    dispatch(UserActions.clear())
  }
  return (
    <div>
      <GoogleLogout {...GoogleLoginProps} onLogoutSuccess={onSuccess} buttonText="Logout" />
    </div>
  )
}
