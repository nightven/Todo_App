import { Request, Response, NextFunction } from 'express';
import { Helpers } from '@/helpers';

type Controller = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

const ctrlWrapper = (
	ctrl: Controller,
): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
	const fn = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			await ctrl(req, res, next);
		} catch (error) {
			if (typeof next === 'function') {
				next(error as Error);
			} else {
				Helpers.httpErrors(500, 'Server Error');
			}
		}
	};
	return fn;
};

export default ctrlWrapper;
