import React, { useEffect } from 'react';
import { Toaster, Position, Intent } from '@blueprintjs/core';

let toasterRef: Toaster | null = null;

export const showToast = (
	message: string,
	intent: Intent = Intent.NONE,
): void => {
	if (toasterRef) {
		toasterRef.show({
			message,
			intent,
			icon: intent === Intent.SUCCESS ? 'tick' : undefined,
		});
	}
};

const GlobalToaster: React.FC = () => {
	useEffect(() => {
		toasterRef = Toaster.create({
			position: Position.TOP_RIGHT,
		});
	}, []);

	return null;
};

export default GlobalToaster;
