import { Button } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';
import React from 'react';

interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
	const dispatch = useAppDispatch()

	return (
		<div>
			<p>admin layout</p>
			<Button
				variant="outlined"
				color="secondary"
				onClick={() => dispatch(authActions.logout())}
			>
				Logout
			</Button>
		</div>
	);
};
