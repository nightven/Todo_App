import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JwtType } from '@/types/jwt.type';
dotenv.config();

export const generateToken = (id: number): string => {
	return jwt.sign({ id }, process.env.SECRET_KEY || 'default_jwt_secret', {
		expiresIn: '24h',
	});
};

export const verifyToken = (token: string): JwtType | null => {
	try {
		return jwt.verify(
			token,
			process.env.SECRET_KEY || 'default_secret_key',
		) as JwtType;
	} catch (error) {
		return null;
	}
};
