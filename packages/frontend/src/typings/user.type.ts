export type ResetEmail = {
	email: string;
};
export type LoginUserType = ResetEmail & {
	password: string;
};
export type RegisterUserType = LoginUserType & {
	name: string;
	confirmPassword: string;
};

export type ChangePassType = {
	password: string;
	newPassword: string;
};

export type ResetPassword = {
	password: string;
	confirmPassword: string;
};

export type UserType = {
	id: number;
	name: string;
	email: string;
	token: string;
	verificationToken: string;
	isVerifiedEmail: boolean;
};

export type ResMsgType = {
	message: string;
};
export type ResUserType = ResMsgType & {
	data: UserType;
};
export type ResLoginType = ResMsgType & {
	data: {
		user: UserType;
		token: string;
	};
};
