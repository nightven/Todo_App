import * as React from 'react';
import { Suspense } from 'react';
import ErrorBoundary from '~shared/components/error/error.boudary';
import Loader from '~shared/components/loader/loader.component';
import { ROUTER_KEYS } from '~shared/keys';

const HomePage = React.lazy(() => import('~/pages/home.page'));
const LoginPage = React.lazy(() => import('~/pages/login.page'));
const ProfilePage = React.lazy(() => import('~/pages/profile.page'));
const ResetPage = React.lazy(() => import('~/pages/reset.page'));
const TodoDetailPage = React.lazy(() => import('~/pages/todo.detail.page'));
const TodoEditPage = React.lazy(() => import('~/pages/todo.edit.page'));
const VerifyPage = React.lazy(() => import('~/pages/verify.page'));

export const publicRoutes = [
	{
		path: ROUTER_KEYS.LOGIN,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<LoginPage />
				</ErrorBoundary>
			</Suspense>
		),
	},
	{
		path: ROUTER_KEYS.VERIFY,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<VerifyPage />
				</ErrorBoundary>
			</Suspense>
		),
	},
	{
		path: ROUTER_KEYS.RESET_PASSWORD,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<ResetPage />
				</ErrorBoundary>
			</Suspense>
		),
	},
];

export const privateRoutes = [
	{
		path: ROUTER_KEYS.HOME,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<HomePage />
				</ErrorBoundary>
			</Suspense>
		),
	},
	{
		path: ROUTER_KEYS.PROFILE,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<ProfilePage />
				</ErrorBoundary>
			</Suspense>
		),
	},
	{
		path: ROUTER_KEYS.TODO_DETAILS,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<TodoDetailPage />
				</ErrorBoundary>
			</Suspense>
		),
	},
	{
		path: ROUTER_KEYS.EDIT_TODO,
		component: (
			<Suspense fallback={<Loader size="large" />}>
				<ErrorBoundary>
					<TodoEditPage />
				</ErrorBoundary>
			</Suspense>
		),
	},
];
