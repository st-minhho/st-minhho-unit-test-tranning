import { ApiService } from '@app/core/services/api.service';
import {
  getDetailUserFailed,
  getDetailUserSuccess,
  getUsersFailed,
  getUsersSuccess,
  removeUserFailed,
  removeUserSuccess
} from './users.actions';
import { all, put, takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '@app/core/constants/types';

const api = new ApiService();

function* getUsers() {
  try {
    const res = yield api.get(['/users']);
    yield put(getUsersSuccess(res));
  } catch (error) {
    yield put(getUsersFailed(error));
  }
}

function* getDetailUser(action) {
  try {
    const res = yield api.get([`users/${action.payload}`]);
    yield put(getDetailUserSuccess(res));
  } catch (error) {
    yield put(getDetailUserFailed(error));
  }
}

function* removeUser(action) {
  try {
    const res = yield api.delete(['users'], action.payload);
    yield put(removeUserSuccess(res.data));
  } catch (error) {
    yield put(removeUserFailed(error));
  }
}

export function* watchUsers() {
  yield all([takeLatest(ACTION_TYPES.GET_USERS, getUsers)]);
  yield all([takeLatest(ACTION_TYPES.GET_DETAIL_USER, getDetailUser)]);
  yield all([takeLatest(ACTION_TYPES.REMOVE_USER, removeUser)]);
}
