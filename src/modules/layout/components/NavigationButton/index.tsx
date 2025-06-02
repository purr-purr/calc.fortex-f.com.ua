import { FC, useContext } from 'react';
import Image from 'next/image';

import { HeaderContext } from '@modules/layout/context/HeaderContext';

import DARK_OPEN_ICON from '@public/assets/icon-menu--dark.svg';
import CLOSE_ICON from '@public/assets/icon-menu-cross.svg';
import WHITE_OPEN_ICON from '@public/assets/icon-menu.svg';

import s from './NavigationButton.module.scss';

const NavigationButton: FC<{ whiteHeaderMode: boolean }> = ({
	whiteHeaderMode,
}) => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(HeaderContext);
	const openIcon = !whiteHeaderMode ? WHITE_OPEN_ICON : DARK_OPEN_ICON;
	return (
		<button
			className={s.container}
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
		>
			<Image src={isMobileNavMode ? CLOSE_ICON : openIcon} alt="menu" />
		</button>
	);
};

export default NavigationButton;
