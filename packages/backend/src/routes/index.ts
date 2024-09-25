import { Application } from 'express';
import todosRouter from '../modules/todos/todos.route';
import usersRouter from '@/modules/users/users.route';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});
		this.app.use('/api/todos', todosRouter);
		this.app.use('/api/user', usersRouter);
	}
}

export default AppRouter;
