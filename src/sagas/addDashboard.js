import {
  call,
  put
} from 'redux-saga/effects';

import {
  put as putData
} from '../services/dashboard';

import {
  ADD_CELL_SENDING_REQUEST,
  ADD_CELL_REQUEST_ERROR
} from '../actions/constants'

const addDashboard = function * ({team, project, travisApiKey, githubApiKey, apexApiKey}) {

  yield put({type: ADD_CELL_SENDING_REQUEST, sending: true})

  try {
    const response = yield call(putData, team, project, travisApiKey, githubApiKey, apexApiKey)
    return response
  } catch (error) {
    console.log(error)
    yield put({type: ADD_CELL_REQUEST_ERROR, error: error.message})

    return false
  } finally {
    yield put({type: ADD_CELL_SENDING_REQUEST, sending: false})
  }
}

export { addDashboard };
