import { Intent } from '@blueprintjs/core';
import React from 'react';
import { UseFormRegister, FieldErrors, SubmitHandler } from 'react-hook-form';

export type FormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	newPassword: string;
};

export type PassFormData = {
	password: string;
	confirmPassword: string;
	newPassword: string;
};

export type FormState = 'initial' | 'login' | 'register' | 'forgot' | 'reset';

export type AuthFormProps = {
	handleSubmit: (
		callback: SubmitHandler<FormData>,
	) => (e?: React.BaseSyntheticEvent) => void;
	errors: FieldErrors<FormData>;
	register: UseFormRegister<FormData>;
	textSubmitButton: string;
	onBack: () => void;
	type: 'login' | 'register' | 'forgot';
};

export type PassFormProps = {
	handleSubmit: (
		callback: SubmitHandler<FormData>,
	) => (e?: React.BaseSyntheticEvent) => void;
	errors: FieldErrors<PassFormData>;
	register: UseFormRegister<PassFormData>;
	textSubmitButton: string;
	type: 'reset' | 'update';
};

export type InputProps = {
	label: string;
	labelFor: string;
	placeholder: string;
	errors: FieldErrors<FormData>;
	register: UseFormRegister<FormData>;
	name: 'name' | 'password' | 'email' | 'confirmPassword' | 'newPassword';
	type?: 'text' | 'password';
	required?: boolean;
	intent?: Intent;
};

export type PassFormInput = {
	label: string;
	labelFor: string;
	placeholder: string;
	errors: FieldErrors<PassFormData>;
	register: UseFormRegister<PassFormData>;
	name: 'password' | 'confirmPassword' | 'newPassword';
	type?: 'text' | 'password';
	required?: boolean;
	intent?: Intent;
};

export type CreateTodoFormData = {
	title: string;
	description: string;
	isCompleted: boolean;
	isPrivate: boolean;
	authorId?: number;
};

export type TodoInputProps = {
	label: string;
	labelFor: string;
	helperText: string;
	placeholder: string;
	name: 'title' | 'description' | 'isCompleted' | 'isPrivate' | 'authorId';
	register: UseFormRegister<CreateTodoFormData>;
	required: boolean;
	intent: Intent;
	defaultValues: string;
};

export type SearchInputProps = {
	type: string;
	placeholder: string;
	handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className: string;
	value: string;
};
