import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
	console.log('handle increment saga - waiting 2s');
	// wait 2s
	yield delay(2000);

	console.log('Waiting done, dispatch action');

	// dispatch action success
	yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
	console.log('counter saga');

	yield takeEvery(incrementSaga.toString(), handleIncrementSaga); // bấm incre bao nhiêu lần thì tăng bấy nhiều
	yield takeLatest(incrementSaga.toString(), handleIncrementSaga); // bấm incre bao nhiêu lần thì tăng 1 lần cuối cùng
}
