import { ResUserType, CreateUserType } from '@/types/users.type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserService {
	async createUser(data: CreateUserType): Promise<ResUserType> {
		return await prisma.user.create({ data });
	}

	async findUserByEmail(email: string): Promise<ResUserType | null> {
		return await prisma.user.findUnique({ where: { email } });
	}

	async findUserById(id: number): Promise<ResUserType | null> {
		return await prisma.user.findUnique({ where: { id } });
	}

	async findUserByVerificationToken(
		verificationToken: string,
	): Promise<ResUserType | null> {
		return await prisma.user.findFirst({ where: { verificationToken } });
	}

	async updateUser(
		id: number,
		data: Partial<ResUserType>,
	): Promise<ResUserType | null> {
		return await prisma.user.update({ where: { id }, data: data });
	}
}
