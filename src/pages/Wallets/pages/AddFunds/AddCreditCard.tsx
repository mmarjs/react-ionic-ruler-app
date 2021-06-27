import { Box, makeStyles } from '@material-ui/core';
import { Checkbox, GreenButton, Page, TextField } from 'components';
import { IAddFundsProps, ICreditCardProps } from './AddFunds.types';

import { styles } from './AddFunds.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateCardNumberLength, validateDate, validateNumber } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

const initialCardState: ICreditCardProps = {
	name: '',
	cardNumber: '',
	expireDate: '',
	cvc: '',
	cardCountry: '',
	zipCode: '',
	cardNumberValid: true,
	zipCodeValid: true,
	dateValid: true,
	cvcValid: true
};

export const AddCreditCard: React.FunctionComponent<IAddFundsProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [cardState, setCardState] = React.useState<ICreditCardProps>(initialCardState);
	const [checked, setChecked] = React.useState<boolean>(false);
	const [amount, setAmount] = React.useState<string>('');
	React.useEffect(() => {
		const params: any = props.location.state;
		const amount = params && params.amount ? params.amount : '';

		if (amount) setAmount(amount);
	}, [props.location.state]);

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		const value = event.target.value;
		const trimValue = value.replace(/\s/g, '');

		if (event.target.name === 'cardNumber') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: value.includes(' ') ? trimValue : value,
				cardNumberValid: validateCardNumberLength(value.includes(' ') ? trimValue : value)
			}));
		} else if (event.target.name === 'zipCode') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: value.includes(' ') ? trimValue : value,
				zipCodeValid: validateNumber(value.includes(' ') ? trimValue : value)
			}));
		} else if (event.target.name === 'expireDate') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
				dateValid: validateDate(event.target.value)
			}));
		} else if (event.target.name === 'cvc') {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: value.includes(' ') ? trimValue : value,
				cvcValid: validateNumber(value.includes(' ') ? trimValue : value)
			}));
		} else {
			setCardState(prevState => ({
				...prevState,
				[event.target.name]: event.target.value
			}));
		}
	};

	const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		setChecked(event.target.checked);
	};

	const handleNextClick = (): void => {
		history.replace('/wallets', { addFunds: true, amount: amount });
	};

	return (
		<Page title={formatMessage({ id: 'wallets.add_credit_card.title' })} titleSize="medium">
			<Box className={classes.cardInputWrapper}>
				<TextField
					name="name"
					label={formatMessage({ id: 'wallets.add_credit_card.card_owner_name' })}
					value={cardState.name}
					onValueChange={handleStateChange}
				/>
				<TextField
					name="cardNumber"
					error={!cardState.cardNumberValid}
					helperText={!cardState.cardNumberValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					label={formatMessage({ id: 'wallets.add_credit_card.card_number' })}
					value={cardState.cardNumber}
					onValueChange={handleStateChange}
				/>
				<Box className={classes.cardCredentialWrapper}>
					<TextField
						name="expireDate"
						label="DD/MM/YYYY"
						error={!cardState.dateValid}
						helperText={!cardState.dateValid ? formatMessage({ id: 'wallets.add_credit_card.expire_date.helper_text' }) : ''}
						value={cardState.expireDate}
						onValueChange={handleStateChange}
					/>
					<TextField
						name="cvc"
						error={!cardState.cvcValid}
						helperText={!cardState.cvcValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
						label={formatMessage({ id: 'wallets.add_credit_card.cvc' })}
						value={cardState.cvc}
						onValueChange={handleStateChange}
					/>
				</Box>
				<TextField
					name="cardCountry"
					label={formatMessage({ id: 'wallets.add_credit_card.card_country' })}
					value={cardState.cardCountry}
					onValueChange={handleStateChange}
				/>
				<TextField
					name="zipCode"
					error={!cardState.zipCodeValid}
					helperText={!cardState.zipCodeValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					label={formatMessage({ id: 'wallets.add_credit_card.zip_code' })}
					value={cardState.zipCode}
					onValueChange={handleStateChange}
				/>
			</Box>
			<Box className={classes.footer}>
				<Checkbox
					checked={checked}
					label={formatMessage({ id: 'wallets.add_credit_card.save_payment_method' })}
					onValueChange={handleCheckChange}
				/>
				<GreenButton
					iconName="add-payment"
					compact
					onClick={handleNextClick}
					disabled={Object.values(cardState).findIndex(value => !value) > -1}
				>
					{formatMessage({ id: 'wallets.add_credit_card.add_pay' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
