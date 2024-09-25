import { Request, Response, NextFunction } from 'express';
import { Helpers } from '../helpers';
import { ResUserType } from '../types/users.type';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

import prisma from '@/client';
import { JwtType } from '@/types/jwt.type';
dotenv.config();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY || 'default_secret_key',
};

passport.use(
	new JwtStrategy(options, async (jwt_payload: JwtType, done) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: jwt_payload.id },
			});
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		} catch (err) {
			return done(err, false);
		}
	}),
);

export const authenticated = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	passport.authenticate(
		'jwt',
		{ session: false },
		(err: Error, user: ResUserType | false) => {
			if (err) return next(err);
			if (!user) {
				return next(Helpers.httpErrors(401));
			}
			req.user = user;
			next();
		},
	)(req, res, next);
};
