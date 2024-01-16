import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from './actions';
import axios from 'axios';

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, 'https://randomuser.me/api/?results=100');
    yield put(setUsers(response.data.results));
  } catch (error) {
    // Handle error
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}
