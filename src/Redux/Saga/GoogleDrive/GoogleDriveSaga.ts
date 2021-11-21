import { takeEvery } from 'redux-saga/effects'
import { getUserDataHandler } from './Handlers/getUserDataHandler'

export function* watcherSaga() {
  yield takeEvery('GET_USER_DATA', getUserDataHandler)
}
