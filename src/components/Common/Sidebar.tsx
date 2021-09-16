import { Collapse } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
		link: {
			color: 'inherit',
			textDecoration: 'none',

			'&.active > div': {
				backgroundColor: theme.palette.action.selected,
			},
		},
	})
);

export function Sidebar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<NavLink to="/admin/dashboard" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
				</NavLink>

				<NavLink to="/admin/students" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary="Students" />
					</ListItem>
				</NavLink>
			</List>
		</div>
	);
}
