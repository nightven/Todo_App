import dotenv from 'dotenv';
import { transporter } from './email.config';
dotenv.config();

const { FRONTEND_URL } = process.env;
const sender = process.env.EMAIL_FROM;

export const sendPasswordResetEmail = async (
	email: string,
	token: string,
): Promise<boolean> => {
	const resetLink = `${FRONTEND_URL}/reset-password?token=${token}`;

	try {
		await transporter.sendMail({
			from: sender,
			to: email,
			subject: 'Reset your password',
			html: `<p>Click <a href="${resetLink}">here</a> to change your password.</p>`,
		});
		return true;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error('Failed to send email: ' + error.message);
		}
		throw new Error('Failed to send email due to an unknown error');
	}
};

export const sendVerificationEmail = async (
	email: string,
	token: string,
): Promise<boolean> => {
	const confirmLink = `${FRONTEND_URL}/user/verification?token=${token}`;
	try {
		await transporter.sendMail({
			from: sender,
			to: email,
			subject: 'Verify your email',
			html: `<p>Click <a href="${confirmLink}">here</a> to verify your email.</p>`,
		});
		return true;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error('Failed to send email: ' + error.message);
		}
		throw new Error('Failed to send email due to an unknown error');
	}
};
