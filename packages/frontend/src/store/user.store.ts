import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getTokenFromLocalStorage } from '~/utils/getTokenFromLocalStoreage';
import { STORAGE_KEYS } from '~shared/keys';
import { UserType } from '~typings/user.type';

export interface IUserStore {
	error: string | null;
	loading: boolean;
	profile: UserType | null;
	token: string | null;
	loggedIn: boolean;
	setError: (error: string | null) => void;
	setLoading: (loading: boolean) => void;
	setProfile: (user: UserType) => void;
	setToken: (token: string | null) => void;
	setLoggedIn: (loggedIn: boolean) => void;
}

export const useUserStore = create<IUserStore>()(
	persist(
		(set) => ({
			loading: false,
			error: null,
			profile: null,
			token: null,
			loggedIn: Boolean(getTokenFromLocalStorage()),

			setError: (error): void => {
				set({ error: error });
			},

			setLoading: (loading): void => {
				set({ loading });
			},

			setProfile: (user): void => {
				set({ profile: user });
			},

			setToken: (token): void => {
				set({ token });
			},

			setLoggedIn: (loggedIn): void => {
				set({ loggedIn });
			},
		}),
		{
			name: STORAGE_KEYS.TOKEN,
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				token: state.token,
			}),
		},
	),
);

export default useUserStore;
