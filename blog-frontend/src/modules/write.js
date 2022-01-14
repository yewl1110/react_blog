import { createAction, handleActions } from 'redux-actions'
import createRequestSaga from '../lib/createRequestSaga'
import * as postAPI from '../lib/api/post'
import { takeLatest, call } from 'redux-saga/effects'

const INITIALIZE = 'write/INITIALIZE'
const CHANGE_FIELD = 'write/CHANGE_FIELD'

const WRITE_POST = 'write/WRITE_POST'
const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS'
const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE'

export const initialize = createAction(INITIALIZE)
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}))
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}))

const writePostSaga = createRequestSaga(WRITE_POST, postAPI.writePost)

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga)
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
}

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({ ...state, post }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
)

export default write
