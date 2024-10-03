import {
	ChangeNameType,
	ChangePassType,
	LoginUserType,
	RegisterUserType,
	ResLoginType,
	ResMsgType,
	ResUserType,
	ResetEmail,
	ResetPassword,
	UserType,
} from '~typings/user.type';
import HttpService from './http.service';

export type ResponseType = {
	message: string;
	data: {
		id: number;
		name: string;
		email: string;
		token: string;
		verificationToken: string;
		isVerifiedEmail: boolean;
	};
};

class UserService extends HttpService {
	async register(data: RegisterUserType): Promise<ResMsgType> {
		const res = await this.post<ResMsgType>({ url: 'user/register', data });
		return res.data;
	}

	async login(data: LoginUserType): Promise<ResLoginType> {
		const res = await this.post<ResLoginType>(
			{ url: 'user/login', data },
			false,
		);
		return res.data;
	}

	async current(): Promise<UserType> {
		const res = await this.get<ResUserType>({ url: 'user/profile' });
		return res.data.data;
	}

	async verify(verificationToken: string): Promise<ResMsgType> {
		const res = await this.post<ResMsgType>({
			url: 'user/verify',
			data: { verificationToken },
		});
		return res.data;
	}

	async changeName(data: ChangeNameType): Promise<UserType> {
		const res = await this.patch<UserType>({
			url: 'user/change-name',
			data,
		});
		return res.data;
	}

	async changePassword(data: ChangePassType): Promise<ResMsgType> {
		const res = await this.patch<ResMsgType>({
			url: 'user/change-password',
			data,
		});
		console.log('patch');

		return res.data;
	}

	async forgotPassword(data: ResetEmail): Promise<ResMsgType> {
		const res = await this.post<ResMsgType>({
			url: 'user/forgot-password',
			data,
		});
		return res.data;
	}

	async resetPassword(data: ResetPassword): Promise<ResMsgType> {
		const res = await this.patch<ResMsgType>({
			url: 'user/reset-password',
			data,
		});
		return res.data;
	}
}
export default new UserService();
