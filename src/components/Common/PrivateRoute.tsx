import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export const PrivateRoute = (props: RouteProps) => {
	/* Check if user  is logged in
	If yes, show Route
	Otherwise, redirect to login page */

	const isLoggedIn = Boolean(localStorage.getItem('access_token'));
	if (!isLoggedIn) return <Redirect to="/login" />;

	return <Route {...props} />;
};
