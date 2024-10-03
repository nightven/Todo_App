import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import PrivateRoute from './private.route';
import Layout from '~shared/components/layout/layout';
import Loader from '~shared/components/loader/loader.component';
import { ToastContainer } from 'react-toastify';
import PublicRoute from './public.route';

const AppRouter: React.FunctionComponent = () => {
	return (
		<Router>
			<Suspense fallback={<Loader size="large" />}>
				<Routes>
					{publicRoutes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<PublicRoute>{route.component}</PublicRoute>
							}
						/>
					))}
					{privateRoutes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute>
									<Layout>{route.component}</Layout>
								</PrivateRoute>
							}
						/>
					))}
				</Routes>
			</Suspense>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Router>
	);
};

export default AppRouter;
