import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'types';
import { dashboardActions, RankingByCity } from './dashboardSlice';

function* fetchStatistics() {
	// totalRows => bao nhieu record
	const responseList: Array<ListResponse<Student>> = yield all([
		call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male', _order: 'desc' }),
		call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female', _order: 'desc' }),
		call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8, _order: 'desc' }),
		call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5, _order: 'desc' }),
	]);

	const statisticList = responseList.map((x) => x.pagination._totalRows);
	const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
	yield put(
		dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount })
	);
}

function* fetchHighestStudentList() {
	const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
		_page: 1,
		_limit: 5,
		_sort: 'mark',
		_order: 'desc',
	});
	yield put(dashboardActions.setHighestStudentList(data));
}

function* fetchLowestStudentList() {
	const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
		_page: 1,
		_limit: 5,
		_sort: 'mark',
		_order: 'asc',
	});
	yield put(dashboardActions.setLowestStudentList(data));
}

function* fetchRankingByCityList() {
	// Fetch city list
	const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);
	// Fetch ranking per city
	const callList = cityList.map((x) =>
		call(studentApi.getAll, {
			_page: 1,
			_limit: 5,
			_sort: 'mark',
			_order: 'desc',
			city: x.code,
		})
	);

	const responseList: Array<ListResponse<Student>> = yield all(callList);
	const rankingByCityList: Array<RankingByCity> = responseList.map((x, idx) => ({
		cityId: cityList[idx].code,
		rankingList: x.data,
	}));

	// update state
	yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

function* fetchDashboardData() {
	// 4 func chay song song
	try {
		yield all([
			call(fetchStatistics),
			call(fetchHighestStudentList),
			call(fetchLowestStudentList),
			call(fetchRankingByCityList),
		]);

		yield put(dashboardActions.fetchDataSuccess());
	} catch (error) {
		console.log('[fetchDashboardData] fail to fetch dashboard data: ', error);
		yield put(dashboardActions.fetchDataFailed());
	}
}

export default function* dashboardSaga() {
	yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
