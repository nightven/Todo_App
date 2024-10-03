/** @jsxImportSource @emotion/react */
import React from 'react';
import { Dialog, Classes, Button, Portal } from '@blueprintjs/core';
import { Cross } from '@blueprintjs/icons';
import {
	modalContent,
	modalDialogStyles,
	modalOverlay,
} from './todos.create.modal.style';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const { isMobile } = useCustomMediaQuery();
	return (
		<Portal>
			<Dialog
				isOpen={isOpen}
				onClose={onClose}
				css={[modalOverlay, modalDialogStyles(isMobile)]}
				canEscapeKeyClose={true}
				canOutsideClickClose={true}
			>
				<div css={modalContent}>
					<div className={Classes.DIALOG_BODY}>{children}</div>
					<Button
						className={Classes.DIALOG_CLOSE_BUTTON}
						onClick={onClose}
						icon={<Cross size={20} color="white" />}
					/>
				</div>
			</Dialog>
		</Portal>
	);
};

export default Modal;
