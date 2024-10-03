import { STORAGE_KEYS } from '~shared/keys';

export const getTokenFromLocalStorage = (): string => {
	const tokenString = localStorage.getItem(STORAGE_KEYS.TOKEN);
	if (!tokenString) return '';
	const parsedData = JSON.parse(tokenString);
	const token = parsedData.state?.token || null;
	return token;
};
