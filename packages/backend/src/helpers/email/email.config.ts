import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const { GOOGLE_PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'vitaliy.beyar@gmail.com',
		pass: GOOGLE_PASSWORD,
	},
});
