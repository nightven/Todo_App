import { Helpers } from '@/helpers';
import { Response, Request, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validateBody = (
	schema: ObjectSchema,
): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
	const fn = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		const { error } = schema.validate(req.body, {
			abortEarly: false,
		});
		if (error) {
			console.log(error);
			return next(Helpers.httpErrors(400, error.details[0].message));
		}
		next();
	};
	return fn;
};

export default validateBody;
