import { Reducer } from 'redux'
import { ProgressBarAction } from './ProgressBarActions'
import ProgressBarConstants from './ProgressBarConstants'

export interface ProgressBarState {
  progress: number
  indeterminate: boolean
}

const initialState = {
  progress: 0,
  indeterminate: false
}

const ProgressBarReducer: Reducer<ProgressBarState, ProgressBarAction> = (state = initialState, action: ProgressBarAction) => {
  switch (action.type) {
    case ProgressBarConstants.DISABLE_INDETERMINATE_PROGRESS_BAR:
      return {
        ...state,
        progress: 0,
        indeterminate: false
      }
    case ProgressBarConstants.ENABLE_INDETERMINATE_PROGRESS_BAR:
      return {
        ...state,
        progress: 0,
        indeterminate: true
      }
    case ProgressBarConstants.SET_PROGRESS_VALUE:
      return {
        ...state,
        progress: action.progress,
        indeterminate: false
      }
    default:
      return state
  }
}

export default ProgressBarReducer
