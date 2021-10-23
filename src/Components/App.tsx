import React from 'react'
import './App.css'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from '../Redux/Actions/UserActions'
import { RootState } from '../Redux/Reducers'
import { AlertActions } from '../Redux/Actions/AlertActions'
import { AlertStatus } from '../Redux/Constants/AlertConstants'
import { LoginWithGoogle, Logout } from './LoginWithGoogle/LoginWithGoogle'

const App = () => {
  const state = useSelector((state: RootState) => state.User)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(AlertActions.addAlert(AlertStatus.success, 'Test 4'))
    dispatch(UserActions.google_login())
    dispatch(UserActions.check_master_password())
    dispatch(AlertActions.addAlert(AlertStatus.success, 'Password OK'))
  }

  let sessionStatus = <LoginWithGoogle />
  if (state.google_token !== null) {
    sessionStatus = <Logout />
  }

  return (
    <div className="App">
      {sessionStatus}
      <Button onClick={handleClick}>Test Redux</Button>
      <br />
      {JSON.stringify(state)}
    </div>
  )
}

export default App
