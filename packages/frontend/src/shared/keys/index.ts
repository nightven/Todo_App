export const enum ROUTER_KEYS {
	ALL_MATCH = '/*',
	LOGIN = '/login',
	DASHBOARD = '/dashboard',
	HOME = '/',
	PROFILE = '/profile',
	TODO_DETAILS = '/todo/:id',
	EDIT_TODO = '/todo/edit/:id',
	RESET_PASSWORD = '/reset-password',
	VERIFY = '/user/verification',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
	ACTIVE_FILTER: 'ACTIVE_FILTER',
});
