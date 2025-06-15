import { FC, type ReactNode } from 'react';
import Image from 'next/image';

import ButtonLink from '@modules/common/components/ButtonLink';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { advantagesList } from '@modules/home/components/About/data';

import s from './About.module.scss';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<ul className={s.advantages}>
				{advantagesList.map((item) => (
					<li className={s.advantagesItem} key={item.desc}>
						<Image src={item.icon} alt="icon" />
						<h5 className={s.advantagesTitle}>{item.title}</h5>
						{item.desc && <p className={s.advantagesDesc}>{item.desc}</p>}
					</li>
				))}
			</ul>

			<SplitBlocks
				title={`Про компанію`}
				subTitle={`ТОВ «ФОРТЕКС-ФІНАНС» — надійний партнер на фінансовому ринку України з 2015 року`}
			>
				<p>
					Ми надаємо можливість отримувати фінансову підтримку на вигідних умовах,
					забезпечуючи прозорі кредитні рішення.
				</p>

				<p>
					Товариством надається фінансова послуга: НАДАННЯ КОШТІВ ТА БАНКІВСЬКИХ
					МЕТАЛІВ У КРЕДИТ. Ми прагнемо розвитку фінансового ринку України,
					впроваджуючи інноваційні підходи та забезпечуючи високу якість послуг.
				</p>

				<p>
					Товариство включене до Державного реєстру фінансових установ, який веде
					Національний банк України. Свідоцтво про реєстрацію фінансової установи
					серії ФК №В0000212, дата видачі свідоцтва 13.04.2021, дата прийняття та
					номер рішення про внесення фінансової установи до Державного реєстру
					фінансових установ 20.08.2015 № 2022, реєстраційний номер 13103177.
				</p>

				<p>Код ЄДРПОУ 39859779 </p>

				<ButtonLink text="Публічна інформація" href="/public-info" />
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
