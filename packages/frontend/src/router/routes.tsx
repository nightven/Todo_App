import * as React from 'react';
import HomePage from '~/pages/home.page';
import LoginPage from '~/pages/login.page';
import ProfilePage from '~/pages/profile.page';
import ResetPage from '~/pages/reset.page';
import TodoDetailPage from '~/pages/todo.detail.page';
import TodoEditPage from '~/pages/todo.edit.page';
import VerifyPage from '~/pages/verify.page';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = [
	{
		path: ROUTER_KEYS.LOGIN,
		component: <LoginPage />,
	},
	{
		path: ROUTER_KEYS.VERIFY,
		component: <VerifyPage />,
	},
	{
		path: ROUTER_KEYS.RESET_PASSWORD,
		component: <ResetPage />,
	},
];

export const privateRoutes = [
	{
		path: ROUTER_KEYS.HOME,
		component: <HomePage />,
	},
	{
		path: ROUTER_KEYS.PROFILE,
		component: <ProfilePage />,
	},
	{
		path: ROUTER_KEYS.TODO_DETAILS,
		component: <TodoDetailPage />,
	},
	{
		path: ROUTER_KEYS.EDIT_TODO,
		component: <TodoEditPage />,
	},
];
