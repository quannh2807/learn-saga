import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

function App() {
	return (
		<React.StrictMode>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				{/* LOGIN */}
				<Route path="/login">
					<LoginPage />
				</Route>

				{/* ADMIN LAYOUT */}
				<PrivateRoute path="/admin">
					<AdminLayout />
				</PrivateRoute>

				{/* NOT FOUND */}
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</React.StrictMode>
	);
}

export default App;
