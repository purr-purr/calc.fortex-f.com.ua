import CalcBlock from '@modules/loan/components/CalcBlock';

import s from './Loan.module.scss';

const Loan = () => {
	return (
		<div className={s.container}>
			<CalcBlock />
		</div>
	);
};

export default Loan;
