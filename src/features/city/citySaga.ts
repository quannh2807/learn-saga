import { call, put, takeLatest } from '@redux-saga/core/effects';
import cityApi from 'api/cityApi';
import { City, ListResponse } from 'types';
import { cityActions } from './citySlice';

function* fetchCityList() {
	try {
		const response: ListResponse<City> = yield call(cityApi.getAll);
		yield put(cityActions.fetchCityListSuccess(response));
	} catch (error) {
        console.log('fetch city list error: ', error);
        yield put(cityActions.fetchCityListFailed());
	}
}

export default function* citySaga() {
	yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
