import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';

interface PublicRouteProps {
	children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
	const { loggedIn } = useUserStore();

	if (loggedIn) {
		return <Navigate to={ROUTER_KEYS.HOME} replace />;
	}

	return <>{children}</>;
};

export default PublicRoute;
