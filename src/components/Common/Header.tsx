import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';
import React from 'react';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export function Header() {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const handleLogoutAction = () => {
		dispatch(authActions.logout());
	};

	return (
		<Box className={classes.root}>
			<AppBar position="static" elevation={0}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Student Management
					</Typography>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleLogoutAction}
					>
						<ExitToAppIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
