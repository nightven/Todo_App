import errorMessages from './error.messages';
class HttpError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.name = 'HttpError';
	}
}

const httpError = (status: number, message?: string): HttpError => {
	if (!message) {
		message = errorMessages(status);
	}

	return new HttpError(status, message);
};

export default httpError;
