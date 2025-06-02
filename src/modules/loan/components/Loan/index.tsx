import s from './Loan.module.scss';
import CalcBlock from "@modules/loan/components/CalcBlock";

const Loan = () => {
	return (
		<div className={s.container}>
			<CalcBlock/>
		</div>
	);
}

export default Loan;
