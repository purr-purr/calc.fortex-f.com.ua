import { FC, useState } from 'react';

import Slider from '@mui/material/Slider';

import s from './CalcSliders.module.scss';

import type { ICalcRange, SlidesData } from '@modules/calc/types';

const CalcSliders: FC<{
	ranges: ICalcRange;
	isMidBorrow: boolean;
	onSlidesChange: (data: SlidesData) => void;
}> = ({ ranges, isMidBorrow, onSlidesChange }) => {
	const [slidesData, setSlidesData] = useState<SlidesData>({
		amount: 1000,
		duration: 1,
	});

	const handleChange = (name: string, value: number) => {
		const updatedData = { ...slidesData, [name]: value };
		setSlidesData(updatedData);
		onSlidesChange(updatedData);
	};

	const moneyRange = isMidBorrow ? ranges.money.midBorrow : ranges.money.default;
	const durationRange = isMidBorrow
		? ranges.duration.midBorrow
		: ranges.duration.default;

	return (
		<>
			<ul className={s.container}>
				<li>
					<p className={s.title}>Взяти {slidesData.amount} грн.</p>
					<Slider
						aria-label="amount"
						defaultValue={500}
						onChange={(event, value) => handleChange('amount', value as number)}
						step={500}
						min={500}
						max={moneyRange[1]}
						color="primary"
					/>
					<p className={s.range}>
						<span>{moneyRange[0]} грн.</span>
						<span>{moneyRange[1]} грн.</span>
					</p>
				</li>

				<li>
					<p className={s.title}>на {slidesData.duration} дн.</p>
					<Slider
						aria-label="duration"
						defaultValue={1}
						onChange={(event, value) => handleChange('duration', value as number)}
						step={1}
						min={durationRange[0]}
						max={durationRange[1]}
						color="primary"
					/>
					<p className={s.range}>
						<span>{durationRange[0]} день</span>
						<span>{durationRange[1]} днів</span>
					</p>
				</li>
			</ul>
		</>
	);
};

export default CalcSliders;
