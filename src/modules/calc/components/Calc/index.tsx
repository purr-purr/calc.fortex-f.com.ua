import { useState } from 'react';

import CalcConsequencesWarning from '@modules/calc/components/CalcConsequencesWarning';
import CalcResult from '@modules/calc/components/CalcResult';
import CalcSliders from '@modules/calc/components/CalcSliders';
import Button from '@modules/common/components/Button';
import Registration from '@modules/registration/components/Registration';
import cn from 'classnames';

import s from './Calc.module.scss';

import type { ICalcRange, SlidesData } from '@modules/calc/types';

const Calc = () => {
	const [isMidBorrow, setIsMidBorrow] = useState(false);
	const [isConsequencesWarningModal, setIsConsequencesWarningModal] =
		useState(false);
	const [slidesData, setSlidesData] = useState<SlidesData>({
		amount: 1000,
		duration: 1,
	});

	const loanConditions: ICalcRange = {
		money: {
			default: [1000, 8000],
			midBorrow: [8000, 40000],
		},
		duration: {
			default: [1, 90],
			midBorrow: [1, 90],
		},
	};
	return (
		<>
			<div className={cn(s.tabs, !isMidBorrow && s.activeRight)}>
				<button
					className={cn(s.tab, !isMidBorrow && s.active)}
					onClick={() => setIsMidBorrow(false)}
				>
					От 1 000 до 8 000 грн
				</button>

				<button
					className={cn(s.tab, isMidBorrow && s.active)}
					onClick={() => setIsMidBorrow(true)}
				>
					От 8 000 до 40 000
				</button>
			</div>

			<CalcSliders
				ranges={loanConditions}
				isMidBorrow={isMidBorrow}
				onSlidesChange={setSlidesData}
			/>

			<CalcResult moneyAmount={slidesData.amount} duration={slidesData.duration} />

			<Button
				onClick={() => setIsConsequencesWarningModal(true)}
				type="text"
				text="Попередження про можливі наслідки згідно із законодавством України для споживачів у разі користування цією фінансовою послугою або невиконання ними обов’язків згідно з договором про споживчий кредит"
			/>

			<Registration
				moneyAmount={slidesData.amount}
				duration={slidesData.duration}
			/>

			<CalcConsequencesWarning
				isModalOpen={isConsequencesWarningModal}
				handleCloseModal={() => setIsConsequencesWarningModal(false)}
			/>
		</>
	);
};

export default Calc;
