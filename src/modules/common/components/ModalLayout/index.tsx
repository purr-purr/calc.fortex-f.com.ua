import { useEffect, type FC, type ReactNode } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import ICON_CLOSE from '@public/assets/icon-close.svg';

import s from './ModalLayout.module.scss';

const ModalLayout: FC<{
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
}> = ({ isOpen, onClose, children, className }) => {
	useEffect(() => {
		const element = document.querySelector('html');

		if (element) {
			element.setAttribute('style', `${isOpen ? `overflow:hidden;` : ``}`);
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={s.container} onClick={onClose}>
			<div className={s.inner} onClick={(e) => e.stopPropagation()}>
				<button className={s.close} onClick={onClose}>
					<Image src={ICON_CLOSE} alt="icon" />
				</button>
				<div className={cn(s.body, className && className)}>{children}</div>
			</div>
		</div>
	);
};

export default ModalLayout;
