import { Box, makeStyles } from '@material-ui/core';
import { Header, Sidebar } from 'components/Common';
import Dashboard from 'features/dashboard';
import StudentFeature from 'features/student';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		gridTemplateColumns: '300px 1fr',
		gridTemplateAreas: `"header header" "sidebar main"`,

		minHeight: '100vh',
		backgroundColor: theme.palette.background.paper,
	},

	header: {
		gridArea: 'header',
	},
	sidebar: {
		gridArea: 'sidebar',
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	main: {
		gridArea: 'main',

		padding: theme.spacing(2, 3),
	},
}));

interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box className={classes.header}>
				<Header />
			</Box>
			<Box className={classes.sidebar}>
				<Sidebar />
			</Box>
			<Box className={classes.main}>
				<Switch>
					<Route path="/admin/dashboard">
						<Dashboard />
					</Route>
					<Route path="/admin/students">
						<StudentFeature />
					</Route>
				</Switch>
			</Box>
		</Box>
	);
};
