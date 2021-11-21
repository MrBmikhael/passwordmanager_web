import { combineReducers } from 'redux'
import SnackbarReducer, { SnackbarState } from "./Snackbar/SnackbarReducer"
import ProgressBarReducer, { ProgressBarState } from "./ProgressBar/ProgressBarReducer"
import GlobalReducer, { GlobalState } from "./Global/GlobalReducer"

export interface UIState {
  Global: GlobalState
  ProgressBar: ProgressBarState
  Snackbar: SnackbarState
}

const UIReducer = combineReducers<UIState>({
  Global: GlobalReducer,
  ProgressBar: ProgressBarReducer,
  Snackbar: SnackbarReducer
})

export default UIReducer
