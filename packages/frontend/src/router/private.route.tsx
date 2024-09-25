import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';

interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const { loggedIn } = useUserStore();

	if (!loggedIn) {
		return <Navigate to={ROUTER_KEYS.LOGIN} replace />;
	}

	return <>{children}</>;
};

export default PrivateRoute;
