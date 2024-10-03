import React, { useState, useEffect, ReactNode } from 'react';
import ErrorPage from '~/pages/error.page';

type ErrorBoundaryProps = {
	children: ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
	const [hasError, setHasError] = useState(false);

	const handleError = (error: Error, errorInfo: React.ErrorInfo): void => {
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
		setHasError(true);
	};

	useEffect(() => {
		const errorHandler = (error: ErrorEvent): void => {
			handleError(new Error(error.message), {
				componentStack: 'Global error',
			});
		};

		window.addEventListener('error', errorHandler);

		return () => {
			window.removeEventListener('error', errorHandler);
		};
	}, []);

	if (hasError) {
		return <ErrorPage />;
	}

	return <>{children}</>;
};

export default ErrorBoundary;
