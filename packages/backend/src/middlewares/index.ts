import ctrlWrapper from './controllerWrapper.middleware';
import validateBody from './validateBody.middleware';
import isExist from './isExist.middleware';
import { authenticated } from './auth.moddleware';

export const middlewares = {
	ctrlWrapper,
	validateBody,
	isExist,
	authenticated,
};
