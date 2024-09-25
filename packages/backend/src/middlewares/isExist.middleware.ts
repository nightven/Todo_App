import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { Helpers } from '@/helpers';

const prisma = new PrismaClient();

const isExist = <T extends keyof PrismaClient>(model: T) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const { id } = req.params;

			const modelDelegate = prisma[model] as unknown as {
				findUnique: (args: {
					where: { id: number };
				}) => Promise<PrismaClient[T] | null>;
			};

			const object = await modelDelegate.findUnique({
				where: { id: Number(id) },
			});

			if (!object) {
				return next(Helpers.httpErrors(404));
			}

			next();
		} catch (error) {
			next(Helpers.httpErrors(500, 'Internal Server Error'));
		}
	};
};

export default isExist;
