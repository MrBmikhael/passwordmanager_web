import { Reducer } from "redux"
import { AlertAction } from '../Actions/AlertActions'
import { AlertStatus, AlertConstants } from "../Constants/AlertConstants"

export interface AlertState {
  message: string
  status: AlertStatus
}

const initialState = {
  message: "",
  status: AlertStatus.info
}

export const AlertReducer: Reducer<AlertState, AlertAction> = (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case AlertConstants.ADD_ALERT:
      return {
        message: action.message,
        status: action.status
      }
    default:
      return state
  }
}
