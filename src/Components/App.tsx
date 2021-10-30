import React from 'react'
import { Navigator } from './Navigator/Navigator'
import { GlobalAlertSnackbar } from './AlertSnackbar/AlertSnackbar'
import { ProgressCircle } from './ProgressCircle/ProgressCircle'
import { useTimeout } from 'usehooks-ts'
import { useDispatch, useSelector } from 'react-redux'
import { UIActions } from '../Redux/Actions/UIActions'
import { RootState } from '../Redux/Reducers'
import { useLogin } from './LoginWithGoogle/LoginWithGoogle'

const AppLoadingContent = () => {
  return (
    <>
      <ProgressCircle />
    </>
  )
}

const MainAppContent = () => {
  return (
    <>
      <Navigator />
    </>
  )
}

const App = () => {
  const dispatch = useDispatch()
  useLogin()
  useTimeout(() => {
    dispatch(UIActions.endAppLoading())
  }, 3000)

  const loadingState = useSelector((state: RootState) => state.UI.AppLoading)

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
