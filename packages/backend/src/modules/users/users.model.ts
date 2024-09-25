import { emailRegEx, passwordRegEx } from '@/utils/regexes';
import Joi from 'joi';

const registerUserSchema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(64)
		.required()
		.trim()
		.messages({ 'any.required': 'Name is required' }),
	email: Joi.string().pattern(emailRegEx).required().messages({
		'string.pattern.base': 'Email is invalid',
		'string.empty': 'Email cannot be empty',
		'any.required': 'Email is required',
	}),
	password: Joi.string().pattern(passwordRegEx).required().messages({
		'string.pattern.base':
			'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number, and one special symbol',
		'string.empty': 'Password cannot be empty',
		'any.required': 'Password is required',
	}),
	confirmPassword: Joi.string()
		.valid(Joi.ref('password'))
		.required()
		.messages({
			'any.only': 'Passwords do not match',
			'string.empty': 'Confirm Password cannot be empty',
			'any.required': 'Confirm Password is required',
		}),
});

const loginUserSchema = Joi.object({
	email: Joi.string().pattern(emailRegEx).required().messages({
		'string.pattern.base': 'Email is invalid',
		'string.empty': 'Email cannot be empty',
		'any.required': 'Email is required',
	}),
	password: Joi.string().pattern(passwordRegEx).required().messages({
		'string.pattern.base':
			'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number',
		'string.empty': 'Password cannot be empty',
		'any.required': 'Password is required',
	}),
});

const emailUserSchema = Joi.object({
	email: Joi.string().pattern(emailRegEx).required().messages({
		'string.pattern.base': 'Email is invalid',
		'string.empty': 'Email cannot be empty',
		'any.required': 'Email is required',
	}),
});

const changePasswordUserSchema = Joi.object({
	password: Joi.string().pattern(passwordRegEx).required().messages({
		'string.pattern.base':
			'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number',
		'string.empty': 'Password cannot be empty',
		'any.required': 'Password is required',
	}),
	newPassword: Joi.string().pattern(passwordRegEx).required().messages({
		'string.pattern.base':
			'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number',
		'string.empty': 'Confirm Password cannot be empty',
		'any.required': 'Confirm Password is required',
	}),
});

const verificationTokenSchema = Joi.object({
	verificationToken: Joi.string().required().messages({
		'string.empty': 'Token cannot be empty',
		'any.required': 'Token is required',
	}),
});

const resetPasswordSchema = Joi.object({
	password: Joi.string().pattern(passwordRegEx).required().messages({
		'string.pattern.base':
			'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number, and one special symbol',
		'string.empty': 'Password cannot be empty',
		'any.required': 'Password is required',
	}),
	confirmPassword: Joi.string()
		.valid(Joi.ref('password'))
		.required()
		.messages({
			'any.only': 'Passwords do not match',
			'string.empty': 'Confirm Password cannot be empty',
			'any.required': 'Confirm Password is required',
		}),
});

const updateNameUserSchema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(64)
		.required()
		.trim()
		.messages({ 'any.required': 'Name is required' }),
});

const userSchemas = {
	registerUserSchema,
	loginUserSchema,
	emailUserSchema,
	changePasswordUserSchema,
	verificationTokenSchema,
	resetPasswordSchema,
	updateNameUserSchema,
};

export default userSchemas;
