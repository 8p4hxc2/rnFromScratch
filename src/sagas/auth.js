import { call, put, takeEvery, all } from 'redux-saga/effects'
import { types } from '../reducers/auth';
import { authApi } from '../api';

function* authLogin(action) {
    try {
        const result = yield call(authApi.requestLogin);
        yield put({ type: types.LOGIN_SUCCESS, user: result.body });
    }
    catch (e) {
        yield put({ type: types.LOGIN_ERROR });
    }
}

// authentification watcher
export function* authWatcher() {
    yield all([
        takeEvery(types.LOGIN_REQUEST, authLogin)
    ])
}