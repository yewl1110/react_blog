import { createAction, handleAction, handleActions } from 'redux-actions'
import createRequestSaga from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/post'
import { takeLatest } from 'redux-saga/effects'

const READ_POST = 'post/READ_POST'
const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS'
const READ_POST_FAILURE = 'post/READ_POST_FAILURE'
const UNLOAD_POST = 'post/UNLOAD_POST'

export const readPost = createAction(READ_POST)
export const unloadPost = createAction(UNLOAD_POST)

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost)
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga)
}

const initialState = {
  post: null,
  error: null,
}

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({ ...state, post }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
    [READ_POST]: () => initialState,
  },
  initialState,
)

export default post
