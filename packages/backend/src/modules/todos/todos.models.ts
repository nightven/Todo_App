import Joi from 'joi';

const createTodoSchema = Joi.object({
	title: Joi.string().min(3).max(24).trim().required(),
	description: Joi.string().max(400).trim().optional(),
	isCompleted: Joi.boolean().optional(),
	isPrivate: Joi.boolean().optional(),
});

const updateTodoSchema = Joi.object({
	id: Joi.number().optional(),
	title: Joi.string().min(3).max(24).trim().optional(),
	description: Joi.string().max(400).trim().allow(''),
	isCompleted: Joi.boolean().optional(),
	isPrivate: Joi.boolean().optional(),
	authorId: Joi.number(),
});

export const queryTodoSchema = Joi.object({
	page: Joi.string().optional(),
	limit: Joi.string().optional(),
	title: Joi.string().optional(),
});

export const schemas = { createTodoSchema, updateTodoSchema, queryTodoSchema };
