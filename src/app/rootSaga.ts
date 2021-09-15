import counterSaga from 'features/counter/counterSaga';
import { all, delay } from 'redux-saga/effects';

function* helloSaga() {
	console.log('Delay 1s and hello saga');
	yield delay(1000);
}

export default function* rootSaga() {
	console.log('Root saga');
	yield all([helloSaga(), counterSaga()]);
}
