import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/layout/components/Navigation';
import NavigationButton from '@modules/layout/components/NavigationButton';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { LAPTOP_BREAKPOINT, MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [scrollTop, setScrollTop] = useState<number>(0);
	const router = useRouter();
	const scrollTopGap = isMobile ? 20 : 100;
	const isWhiteHeader = scrollTop > scrollTopGap || router.pathname !== '/';

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={cn(s.container, isWhiteHeader && s.active)}>
			<Logo whiteHeaderMode={isWhiteHeader} />

			<HeaderContextWrapper>
				<Navigation whiteHeaderMode={isWhiteHeader} />
				{isLaptop && <NavigationButton whiteHeaderMode={isWhiteHeader} />}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
