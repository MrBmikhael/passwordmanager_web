/* eslint-disable */
import { call } from 'redux-saga/effects'
import { getUserData } from '../Requests/userData'

export function* getUserDataHandler(): any {
  try {
    const res = yield call(getUserData)
    // List of files
    console.log(res.data.files)
  } catch (error) {
    console.log(error)
  }
}
