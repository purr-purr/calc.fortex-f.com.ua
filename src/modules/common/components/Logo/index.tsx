import { FC } from 'react';
import Link from 'next/link';

import cn from 'classnames';

import s from './Logo.module.scss';

const Logo: FC<{ whiteHeaderMode: boolean }> = ({ whiteHeaderMode }) => {
	return (
		<Link href="/" className={cn(s.container, whiteHeaderMode && s.whiteMode)}>
			Фортекс-Фінанс
			<span>фінансова компанія</span>
		</Link>
	);
};

export default Logo;
