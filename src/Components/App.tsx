import React from 'react'
import { useTimeout } from 'usehooks-ts'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Typography } from '@mui/material'
import { Navigator } from './Navigator/Navigator'
import { GlobalAlertSnackbar } from './AlertSnackbar/AlertSnackbar'
import { ProgressCircle } from './ProgressCircle/ProgressCircle'
import GlobalActions from '../Redux/Store/UI/Global/GlobalActions'
import { RootState } from '../Redux'
import { useLogin } from './LoginWithGoogle/LoginWithGoogle'

function AppLoadingContent(): React.ReactElement {
  return (
    <Stack sx={{ marginTop: '50px' }} spacing={3} alignContent="center" alignItems="center">
      <ProgressCircle />
      <Typography>
        Loading ...
      </Typography>
    </Stack>
  )
}

function MainAppContent(): React.ReactElement {
  return (
    <Navigator />
  )
}

function App(): React.ReactElement {
  const dispatch = useDispatch()
  useLogin()
  // useTimeout(() => {
  dispatch(GlobalActions.endAppLoading())
  // }, 3000)

  const loadingState = useSelector((state: RootState) => state.UI.Global.AppLoading)

  let content = <AppLoadingContent />
  if (!loadingState) {
    content = <MainAppContent />
  }

  return (
    <div className="App">
      <GlobalAlertSnackbar />
      {content}
    </div>
  )
}

export default App
