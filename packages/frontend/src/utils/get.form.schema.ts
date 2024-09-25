import { ZodSchema } from 'zod';
import {
	forgotPasswordSchema,
	loginSchema,
	registrationSchema,
} from '~shared/services/schemas/user.schema';
import { FormState } from '~typings/forms.type';

export const getSchema = (formState: FormState): ZodSchema | undefined => {
	switch (formState) {
		case 'login':
			return loginSchema;
		case 'register':
			return registrationSchema;
		case 'forgot':
			return forgotPasswordSchema;
		default:
			return undefined;
	}
};
