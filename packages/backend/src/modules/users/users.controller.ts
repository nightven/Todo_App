import UserService from './users.service';
import { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import {
	sendPasswordResetEmail,
	sendVerificationEmail,
} from '../../helpers/email/email.send';
import { Helpers } from '../../helpers';
import { generateToken } from '@/utils/tokens';
import { User } from '@prisma/client';

export class UserController {
	constructor(private userService: UserService) {}

	async createUser(req: Request, res: Response): Promise<void> {
		const { email, name, password, confirmPassword } = req.body;

		if (password !== confirmPassword) {
			throw Helpers.httpErrors(400, 'Passwords do not match');
		}

		const existUser = await this.userService.findUserByEmail(email);

		if (existUser) {
			throw Helpers.httpErrors(409, 'User already exists');
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const verificationToken = uuidv4();

		const newUser = await this.userService.createUser({
			name,
			email,
			password: hashedPassword,
			token: '',
			verificationToken,
			isVerifiedEmail: false,
		});

		if (!newUser) throw Helpers.httpErrors(500, 'invalid user data');

		const isSendedEmail = sendVerificationEmail(email, verificationToken);

		if (!isSendedEmail) {
			throw Helpers.httpErrors(500, 'Failed to send verification email');
		}

		res.status(201).json({
			messages: 'Verification email has been sent',
		});
	}

	async login(req: Request, res: Response): Promise<void> {
		const { email, password } = req.body;

		const user = await this.userService.findUserByEmail(email);

		if (!user) {
			throw Helpers.httpErrors(404, 'User not found');
		}

		if (!user.isVerifiedEmail) {
			const verificationToken = user.verificationToken || uuidv4();

			if (!user.verificationToken) {
				await this.userService.updateUser(user.id, {
					verificationToken,
				});
			}

			const isSendedEmail = await sendVerificationEmail(
				email,
				verificationToken,
			);

			if (!isSendedEmail) {
				throw Helpers.httpErrors(
					500,
					'Failed to send verification email',
				);
			}

			res.status(400).json({
				message:
					'Please verify your email. Verification email has been sent again.',
			});
			return;
		}

		const isValidPassword = await bcrypt.compare(password, user.password);

		if (!isValidPassword) {
			throw Helpers.httpErrors(400, 'Invalid credentials');
		}

		const token = generateToken(user.id);

		await this.userService.updateUser(user.id, { token });

		res.json({
			message: Helpers.codeMessages(200),
			data: { user, token },
		});
	}

	async logout(req: Request, res: Response): Promise<void> {
		const user = req.user as User;

		const updatedUser = this.userService.updateUser(user.id, {
			token: '',
		});

		if (!updatedUser) {
			throw Helpers.httpErrors(404);
		}

		res.json({ message: 'You have successfully logged in' });
	}

	async getProfile(req: Request, res: Response): Promise<void> {
		const user = req.user as User;

		res.json({
			message: Helpers.codeMessages(200),
			data: user,
		});
	}

	async changeName(req: Request, res: Response): Promise<void> {
		const { name } = req.body;
		const { id } = req.user as User;

		const updatedUser = await this.userService.updateUser(id, { name });

		if (!updatedUser) {
			throw Helpers.httpErrors(404);
		}

		res.json({
			message: 'Name changed successfully',
			data: updatedUser,
		});
	}

	async changePassword(req: Request, res: Response): Promise<void> {
		const { password, newPassword } = req.body;
		const user = req.user as User;

		const isValidPassword = await bcrypt.compare(password, user.password);

		if (!isValidPassword) {
			throw Helpers.httpErrors(500, 'Invalid user credential');
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10);

		const updatedUser = this.userService.updateUser(user.id, {
			password: hashedPassword,
		});

		if (!updatedUser) {
			throw Helpers.httpErrors(404);
		}

		res.json({
			messages: 'Password changed successfully',
		});
	}

	async verifyEmail(req: Request, res: Response): Promise<void> {
		const { verificationToken } = req.body;

		const user = await this.userService.findUserByVerificationToken(
			verificationToken as string,
		);

		if (!user) {
			throw Helpers.httpErrors(400, 'Invalid  verification token');
		}

		const newAuthToken = generateToken(user.id);

		const updatedUser = await this.userService.updateUser(user.id, {
			isVerifiedEmail: true,
			verificationToken: '',
			token: newAuthToken,
		});

		if (!updatedUser) {
			throw Helpers.httpErrors(500, 'Failed to verify email');
		}

		res.json({
			message: 'Email successfully verified',
		});
	}

	async forgotPassword(req: Request, res: Response): Promise<void> {
		const { email } = req.body;

		const user = await this.userService.findUserByEmail(email);

		if (!user) {
			throw Helpers.httpErrors(404, 'Email not found');
		}

		const isSendedEmail = await sendPasswordResetEmail(email, user.token);

		if (!isSendedEmail) {
			throw Helpers.httpErrors(
				500,
				'Failed to send reset password email',
			);
		}

		res.json({
			message: 'Password reset email has been sent',
		});
	}

	async resetPassword(req: Request, res: Response): Promise<void> {
		const { password, confirmPassword } = req.body;
		const user = req.user as User;

		if (password !== confirmPassword) {
			throw Helpers.httpErrors(400, 'Passwords do not match');
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const updatedUser = this.userService.updateUser(user.id, {
			password: hashedPassword,
		});

		if (!updatedUser) {
			throw Helpers.httpErrors(404);
		}
		res.json({
			messages: 'New password was successfully set',
		});
	}
}

const userController = new UserController(new UserService());

export default userController;
