import { combineReducers } from 'redux'
import SnackbarReducer, { SnackbarState } from './Snackbar/SnackbarReducer'
import ProgressBarReducer, { ProgressBarState } from './ProgressBar/ProgressBarReducer'
import GlobalReducer, { GlobalState } from './Global/GlobalReducer'
import EntryGridReducer, { EntryGridState } from './EntryGrid/EntryGridReducer'

export interface UIState {
  Global: GlobalState
  ProgressBar: ProgressBarState
  Snackbar: SnackbarState
  EntryGrid: EntryGridState
}

const UIReducer = combineReducers<UIState>({
  Global: GlobalReducer,
  ProgressBar: ProgressBarReducer,
  Snackbar: SnackbarReducer,
  EntryGrid: EntryGridReducer
})

export default UIReducer
