import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCityList, selectCityMap } from 'features/city/citySlice';
import React, { useEffect } from 'react';
import { ListParams } from 'types';
import { StudentFilters } from '../components/StudentFilters';
import { StudentTable } from '../components/StudentTable';
import {
	selectStudentFilter,
	selectStudentList,
	selectStudentPagination,
	studentActions,
} from '../studentSlice';

const useStyles = makeStyles((theme) => ({
	root: {},

	titleContent: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',

		marginBottom: theme.spacing(4),
	},
}));

interface ListPageProps {}

export const ListPage = (props: ListPageProps) => {
	const studentList = useAppSelector(selectStudentList);
	const pagination = useAppSelector(selectStudentPagination);
	const filter = useAppSelector(selectStudentFilter);
	const cityMap = useAppSelector(selectCityMap);
	const cityList = useAppSelector(selectCityList);

	const dispatch = useAppDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(studentActions.fetchStudentList(filter));
	}, [dispatch, filter]);

	const handlePageChange = (e: any, page: number) => {
		dispatch(
			studentActions.setFilter({
				...filter,
				_page: page,
			})
		);
	};

	const handleSearchChange = (newFilter: ListParams) => {
		dispatch(studentActions.setFilterWithDebounce(newFilter));
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.titleContent}>
				<Typography variant="h4">Students</Typography>

				<Button variant="contained" color="primary">
					Add new student
				</Button>
			</Box>
			{/* Filter component */}
			<Box mb={3}>
				<StudentFilters
					filter={filter}
					cityList={cityList}
					onSearchChange={handleSearchChange}
				/>
			</Box>

			<StudentTable studentList={studentList} cityMap={cityMap} />

			<Box mt={2} display="flex" justifyContent="center">
				<Pagination
					count={Math.ceil(pagination._totalRows / pagination._limit)}
					page={pagination._page}
					onChange={handlePageChange}
				/>
			</Box>
		</Box>
	);
};
