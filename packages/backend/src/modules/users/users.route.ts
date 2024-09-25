import { Router } from 'express';
import userSchemas from './users.model';
import userController from './users.controller';
import { middlewares } from '@/middlewares';

const usersRouter: Router = Router();

usersRouter.get(
	'/profile',
	middlewares.authenticated,
	middlewares.ctrlWrapper(userController.getProfile.bind(userController)),
);

usersRouter.patch(
	'/profile',
	middlewares.authenticated,
	middlewares.validateBody(userSchemas.updateNameUserSchema),
	middlewares.ctrlWrapper(userController.changeName.bind(userController)),
);

usersRouter.post(
	'/register',
	middlewares.validateBody(userSchemas.registerUserSchema),
	middlewares.ctrlWrapper(userController.createUser.bind(userController)),
);
usersRouter.post(
	'/login',
	middlewares.validateBody(userSchemas.loginUserSchema),
	middlewares.ctrlWrapper(userController.login.bind(userController)),
);

usersRouter.post(
	'/logout',
	middlewares.authenticated,
	middlewares.ctrlWrapper(userController.logout.bind(userController)),
);

usersRouter.patch(
	'/change-name',
	middlewares.authenticated,
	middlewares.validateBody(userSchemas.updateNameUserSchema),
	middlewares.ctrlWrapper(userController.changeName.bind(userController)),
);

usersRouter.patch(
	'/change-password',
	middlewares.authenticated,
	middlewares.validateBody(userSchemas.changePasswordUserSchema),
	middlewares.ctrlWrapper(userController.changePassword.bind(userController)),
);

usersRouter.post(
	'/verify',
	middlewares.validateBody(userSchemas.verificationTokenSchema),
	middlewares.ctrlWrapper(userController.verifyEmail.bind(userController)),
);

usersRouter.post(
	'/forgot-password',
	middlewares.validateBody(userSchemas.emailUserSchema),
	middlewares.ctrlWrapper(userController.forgotPassword.bind(userController)),
);

usersRouter.patch(
	'/reset-password',
	middlewares.authenticated,
	middlewares.validateBody(userSchemas.resetPasswordSchema),
	middlewares.ctrlWrapper(userController.resetPassword.bind(userController)),
);

usersRouter.get('/protected', middlewares.authenticated, (_, res) => {
	res.status(200).json({
		success: true,
		msg: 'You are successfully authenticated to this route!',
	});
});

export default usersRouter;
