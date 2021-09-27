import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { createSelector } from 'reselect';
import { City, ListResponse } from 'types';

export interface CityState {
	loading: Boolean;
	list: City[];
}

const initialState: CityState = {
	loading: false,
	list: [],
};

const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		fetchCityList(state) {
			state.loading = true;
		},
		fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
			state.loading = false;
			state.list = action.payload.data;
		},
		fetchCityListFailed(state) {
			state.loading = false;
		},
	},
});

// Actions
export const cityActions = citySlice.actions;

// Selectors
export const selectCityList = (state: RootState) => state.city.list;
export const selectCityLoading = (state: RootState) => state.city.loading;
export const selectCityMap = createSelector(selectCityList, (cityList) =>
	cityList.reduce((map: { [key: string]: City }, city) => {
		map[city.code] = city;

		return map;
	}, {})
);

const cityReducer = citySlice.reducer;
export default cityReducer;
