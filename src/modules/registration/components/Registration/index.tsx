import s from './Registration.module.scss';
import Button from '@modules/common/components/Button';
import ModalLayout from '@modules/common/components/ModalLayout';
import {ChangeEvent, FC, FormEvent, useEffect, useRef, useState} from 'react';
import Input from "@modules/common/components/Input";
import {IFormValues, IValidationState} from "@modules/registration/types";
import {
	validateDefault,
	validateEmail,
	validatePhone
} from "@modules/registration/helpers";

const Registration: FC<{ moneyAmount: number, duration: number }> = (
	{
		moneyAmount,
		duration
	}) => {
	const [isRegistrationModal, setIsRegistrationModal] = useState<boolean>(false);
	const [stepFormValid, setStepFormValid] = useState<boolean>(false);
	const [isSuccessStage, setIsSuccessStage] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSuccessStage = (e: FormEvent) => {
		e.preventDefault();
		formRef.current?.submit();
		setIsSuccessStage(true);
	};

	const handleRegistrationModalClose = () => {
		setIsRegistrationModal(false);
		setStepFormValid(false);
		setIsSuccessStage(false);
		setFormValues(initFormValues);
	};

	const initFormValues: IFormValues = {
		name: '',
		phone: '',
		email: '',
	};

	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);
	const [validationState, setValidationState] = useState<IValidationState>({
		name: false,
		phone: false,
		email: false,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name as string]: value,
		}));

		if (name === 'phone') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validatePhone(value),
			}));
		} else if (name === 'email') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validateEmail(value),
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name as string]: validateDefault(value),
			}));
		}
	};

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		allValid && setStepFormValid(true);
	}, [validationState]);

	const isValidInput = (name: string): boolean => {
		return !validationState[name] && formValues[name].length > 0;
	};

	return (
		<>
			<Button
				className={s.startRegistrationBtn}
				text="Заявка на отримання кредиту"
				onClick={() => setIsRegistrationModal(true)}
			/>

			<ModalLayout
				className={s.container}
				isOpen={isRegistrationModal}
				onClose={handleRegistrationModalClose}
			>
				{isSuccessStage ? (
					<p className={s.successStage}>
						Дякуємо, ваша заявка в обробці, очікуйте активації особистого
						кабінету або
						дзвінка менеджеру.
					</p>
				) : (
					<>
						<h3 className={s.title}>Оформлення споживчого кредиту</h3>
						<form action="https://formsubmit.co/666hesoyam@gmail.com"
						      method="POST" ref={formRef}>
							<input type="hidden" name="_next"
							       value="http://localhost:3000/loan/"/>
							<input type="hidden" name="_captcha" value="false"/>
							<input type="hidden" name="_subject"
							       value="+1 заявка на кредит"/>
							<input type="hidden" name="Сума кредиту"
							       value={moneyAmount}/>
							<input type="hidden" name="Строк кредиту"
							       value={duration}/>

							<Input
								name="name"
								type="text"
								placeholder="Iм’я"
								label="Iм’я (як у паспорті)"
								value={formValues.name}
								onChange={handleInputChange}
								isInvalid={isValidInput('name')}
							/>

							<Input
								name="phone"
								type="tel"
								placeholder="+380"
								label="Номер телефону"
								value={formValues.phone}
								onChange={handleInputChange}
								isInvalid={isValidInput('phone')}
							/>

							<Input
								name="email"
								type="email"
								placeholder="email@email.com"
								label="Email"
								value={formValues.email}
								onChange={handleInputChange}
								isInvalid={isValidInput('email')}
							/>

							<p
								className={s.summary}>У сумі {moneyAmount} терміном на {' '}
								{duration} днів</p>

							<Button
								isFormSubmit
								onClick={
									isSuccessStage
										? handleRegistrationModalClose
										: handleSuccessStage
								}
								className={s.startRegistrationBtn}
								isDisabled={!stepFormValid}
								text="Подати заявку на отримання кредиту"
							/>
						</form>
					</>
				)}

			</ModalLayout>
		</>
	);
};

export default Registration;
