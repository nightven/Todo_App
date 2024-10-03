import { toast } from 'react-toastify';
import { STORAGE_KEYS } from '~shared/keys';
import UserService from '~shared/services/users.service';
import useUserStore from '~store/user.store';
import {
	ChangeNameType,
	ChangePassType,
	LoginUserType,
	RegisterUserType,
	ResetEmail,
	ResetPassword,
} from '~typings/user.type';

interface UseUserHookReturn {
	registerUser: (credential: RegisterUserType) => Promise<void>;
	login: (credential: LoginUserType) => Promise<void>;
	logOut: () => void;
	getProfile: () => Promise<void>;
	changeUsername: (credential: ChangeNameType) => Promise<void>;
	changePassword: (credential: ChangePassType) => Promise<void>;
	resetPassword: (credential: ResetPassword) => Promise<void>;
	forgotPassword: (credential: ResetEmail) => Promise<void>;
	verifyEmail: (verificationToken: string) => Promise<void>;
}

export const useUserHook = (): UseUserHookReturn => {
	const {
		profile,
		token,
		setError,
		setLoading,
		setProfile,
		setLoggedIn,
		setToken,
	} = useUserStore();

	const registerUser = async (
		credential: RegisterUserType,
	): Promise<void> => {
		setLoading(true);
		try {
			await UserService.register(credential);
			toast.success(
				'A verification email has been sent, please check your email',
			);
			setLoading(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch user');
		}
	};

	const login = async (credential: LoginUserType): Promise<void> => {
		setLoading(true);
		try {
			const {
				data: { user, token },
			} = await UserService.login(credential);

			setProfile(user);
			setToken(token);
			setLoggedIn(true);
			setLoading(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to login');
		}
	};

	const logOut = (): void => {
		setProfile(null);
		setToken(null);
		setLoggedIn(false);
		setError(null);

		localStorage.removeItem(STORAGE_KEYS.TOKEN);
	};

	const getProfile = async (): Promise<void> => {
		setLoading(true);
		try {
			const user = await UserService.current();

			setProfile(user);
			setToken(token);
			setLoggedIn(true);
			setLoading(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch user');
		}
	};

	const changeUsername = async (
		credential: ChangeNameType,
	): Promise<void> => {
		setLoading(true);
		const { name } = credential;
		try {
			await UserService.changeName(credential);
			setProfile({ ...profile, name });
			setLoading(false);
			setError(null);
			toast.success('Your name has been changed successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to change name');
		}
	};

	const changePassword = async (
		credential: ChangePassType,
	): Promise<void> => {
		setLoading(true);

		try {
			await UserService.changePassword(credential);
			setLoading(false);
			setError(null);
			toast.success('Your password has been changed successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	const resetPassword = async (credential: ResetPassword): Promise<void> => {
		setLoading(true);
		try {
			await UserService.resetPassword(credential);
			setLoading(false);
			setError(null);
			toast.success('Your password has been set successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error(
				`Failed to reset password. ${error.response.status === 401 ? 'You are not authorized' : ''}`,
			);
		}
	};

	const forgotPassword = async (credential: ResetEmail): Promise<void> => {
		setLoading(true);
		try {
			await UserService.forgotPassword(credential);
			setLoading(false);
			setError(null);
			toast.success('Reset email has been sent, check your mail.');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to send reset email. Try again.');
		}
	};

	const verifyEmail = async (verificationToken: string): Promise<void> => {
		setLoading(true);
		try {
			await UserService.verify(verificationToken);
			setLoading(false);
			setError(null);
			toast.success('Email has been verified successfully');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to verify your email. Try again.');
		}
	};
	return {
		registerUser,
		login,
		logOut,
		getProfile,
		changeUsername,
		changePassword,
		resetPassword,
		forgotPassword,
		verifyEmail,
	};
};
