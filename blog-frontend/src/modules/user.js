import { createAction, handleActions } from 'redux-actions'
import createRequestSaga from '../lib/createRequestSaga'
import * as authAPI from '../lib/api/auth'
import { takeLatest } from 'redux-saga/effects'

const TEMP_SET_USER = 'user/TEMP_SET_USER'

const CHECK = 'user/CHECK'
const CHECK_SUCCESS = 'user/CHECK_SUCCESS'
const CHECK_FAILURE = 'user/CHECK_FAILURE'

export const tempSetUser = createAction(TEMP_SET_USER)
export const check = createAction(CHECK)

const checkSaga = createRequestSaga(CHECK, authAPI.check)
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga)
}

const initialState = {
  user: null,
  checkError: null,
}

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState,
)
