import { Redirect, Route } from 'react-router-dom';
// import { Welcome } from '../pages/Welcome';
import React from 'react';
export const PrivateRoute = ({ component: Component, ...restProps }: any) => (
	<Route
		{...restProps}
		render={(props: any) => (localStorage.getItem('authToken') ? <Component {...props} /> : <Redirect to="/welcome" />)}
	/>
);
