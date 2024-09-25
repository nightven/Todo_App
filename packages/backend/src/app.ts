import express, { Express, Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppRouter from './routes';
import { HttpError } from './types/error.type';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

const corsOptions = {
	origin: 'http://localhost:5173',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	allowedHeaders: 'Content-Type,Authorization',
	credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_: Request, res: Response) => {
	res.send('Hello Node!');
});

router.init();

app.use(
	(err: HttpError, req: Request, res: Response, _: NextFunction): void => {
		const { status = 500, message = 'Server error' } = err;
		res.status(status).json({ message });
	},
);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
