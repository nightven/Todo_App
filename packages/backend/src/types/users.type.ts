export type ReqUserType = {
	name: string;
	email: string;
	password: string;
};

export type CreateUserType = ReqUserType & {
	token: string;
	verificationToken: string;
	isVerifiedEmail: boolean;
};
export type ResUserType = CreateUserType & {
	id: number;
};
