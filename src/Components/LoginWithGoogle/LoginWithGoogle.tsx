import React from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { AlertActions } from '../../Redux/Actions/AlertActions'
import { UserActions } from '../../Redux/Actions/UserActions'
import { AlertStatus } from '../../Redux/Constants/AlertConstants'

const client_id = '952024862678-rka3ij8bqmpr6qps23n72a7b72mjpkep.apps.googleusercontent.com'

export const LoginWithGoogle = () => {
  const dispatch = useDispatch()

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    dispatch(UserActions.google_login(response))
    dispatch(AlertActions.addAlert(AlertStatus.success, 'Google Login Successful'))
  }

  const onFailure = (response: GoogleLoginResponse) => {
    console.error(response)
    dispatch(AlertActions.addAlert(AlertStatus.error, 'Google Login Failed'))
  }

  return (
    <div>
      <GoogleLogin
        isSignedIn
        clientId={client_id}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        redirectUri="http://localhost:3000/"
        scope="https://www.googleapis.com/auth/drive.appdata"
      />
    </div>
  )
}

export const Logout = () => {
  const dispatch = useDispatch()
  const onSuccess = () => {
    dispatch(UserActions.clear())
  }
  return (
    <div>
      <GoogleLogout clientId={client_id} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  )
}
