import { z } from 'zod';
import { passwordRegEx } from '~/utils/regexes';

export const registrationSchema = z
	.object({
		name: z.string().min(3, 'Name must be at least 3 characters').max(64),
		email: z
			.string()
			.email('Invalid email address')
			.min(1, 'Email is required'),
		password: z
			.string()
			.regex(
				passwordRegEx,
				'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character',
			),
		confirmPassword: z.string().min(8, 'Confirm Password is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	});

export const loginSchema = z.object({
	email: z
		.string()
		.email('Invalid email address')
		.min(1, 'Email is required'),
	password: z
		.string()
		.regex(
			passwordRegEx,
			'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character',
		),
});

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email('Invalid email address')
		.min(1, 'Email is required'),
});

export const resetPasswordSchema = z.object({
	password: z
		.string()
		.regex(
			passwordRegEx,
			'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character',
		),
	confirmPassword: z.string().min(8, 'Confirm Password is required'),
});

export const changePasswordSchema = z.object({
	password: z
		.string()
		.regex(
			passwordRegEx,
			'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character',
		),
	newPassword: z
		.string()
		.regex(
			passwordRegEx,
			'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character',
		),
});
