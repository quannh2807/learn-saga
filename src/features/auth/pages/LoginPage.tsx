import { Box, Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},

	box: {
		padding: '20px',
	},
}));

const LoginPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={1} className={classes.box}>
				<Typography variant="h5" component="h1">
					Student Management
				</Typography>

				<Box mt={4}>
					<Button fullWidth variant="contained" color="primary">
						Fake login
					</Button>
				</Box>
			</Paper>
		</div>
	);
};

export default LoginPage;
