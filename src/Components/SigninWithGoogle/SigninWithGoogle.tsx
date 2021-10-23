import React from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { AlertActions } from '../../Redux/Actions/AlertActions'
import { UserActions } from '../../Redux/Actions/UserActions'
import { AlertStatus } from '../../Redux/Constants/AlertConstants'

const client_id = "952024862678-rka3ij8bqmpr6qps23n72a7b72mjpkep.apps.googleusercontent.com"

export const SigninWithGoogle = () => {
  const dispatch = useDispatch()

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    dispatch(UserActions.google_login(response))
    dispatch(AlertActions.addAlert(AlertStatus.success, 'Google Login Successful'))
  }

  const onFailure = (error: any) => {
    console.error(error)
    dispatch(AlertActions.addAlert(AlertStatus.error, 'Google Login Failed'))
  }

  return (
    <div>
      <GoogleLogin isSignedIn clientId={client_id} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy='single_host_origin' redirectUri='http://localhost:3000/' scope='https://www.googleapis.com/auth/drive.appdata' />
    </div>
  )
}
