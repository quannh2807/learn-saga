import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

function App() {
	useEffect(() => {
		cityApi.getAll().then((res) => console.log(res));
	}, []);

	return (
		<React.StrictMode>
			<Switch>
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
