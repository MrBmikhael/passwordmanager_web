import { Action, ActionCreator } from 'redux'
import ProgressBarConstants from './ProgressBarConstants'

export interface ProgressBarAction extends Action {
  progress: number
  indeterminate: boolean
}

const setProgressBarValue: ActionCreator<ProgressBarAction> = (progress: number) => (
  { type: ProgressBarConstants.SET_PROGRESS_VALUE, progress, indeterminate: false }
)

const enableIndeterminateProgressBar: ActionCreator<ProgressBarAction> = () => (
  { type: ProgressBarConstants.ENABLE_INDETERMINATE_PROGRESS_BAR, progress: 0, indeterminate: true }
)

const disableIndeterminateProgressBar: ActionCreator<ProgressBarAction> = () => (
  { type: ProgressBarConstants.DISABLE_INDETERMINATE_PROGRESS_BAR, progress: 0, indeterminate: true }
)

const ProgressBarActions = {
  setProgressBarValue,
  enableIndeterminateProgressBar,
  disableIndeterminateProgressBar
}

export default ProgressBarActions
