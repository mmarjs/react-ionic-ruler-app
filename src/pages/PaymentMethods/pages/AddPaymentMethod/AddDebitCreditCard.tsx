import { Box, makeStyles } from '@material-ui/core';
import { GreenButton, Page, TextField } from 'components';
import { IAddPaymentMethodProps, ICreditCardProps } from './AddPaymentMethod.types';
import { styles } from './AddPaymentMethod.styles';
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

export const AddDebitCreditCard: React.FunctionComponent<IAddPaymentMethodProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [cardState, setCardState] = React.useState<ICreditCardProps>(initialCardState);
	const [pageName, setPageName] = React.useState('');
	const [selectedIndex, setSelectedIndex] = React.useState(-1);

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

	// const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
	// 	event.persist();
	// 	setChecked(event.target.checked);
	// };

	const handleNextClick = (): void => {
		history.replace(pageName ? '/home' : '/payment-methods', {
			data: cardState,
			index: selectedIndex > -1 ? selectedIndex : -1
			// checked: checked
		});
	};
	React.useEffect(() => {
		const params: any = props.location.state;
		const pageName = params && params.pageName ? params.pageName : '';
		const data = params && params.data ? params.data : null;
		// const checked = params && params.checked;
		const index = params && params.selectedIndex > -1 ? params.selectedIndex : -1;
		// setChecked(checked);

		if (pageName) setPageName(pageName);

		if (data) setCardState(data);

		if (index > -1) setSelectedIndex(index);
	}, [props.location.state]);

	return (
		<Page title={formatMessage({ id: 'payment_methods.add_payment_method.card' })} titleSize="medium">
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
				<GreenButton
					className={classes.addPaymentMethodButton}
					disabled={Object.values(cardState).findIndex(value => !value) > -1}
					iconName={selectedIndex > -1 ? 'well-done-checked' : 'add'}
					compact
					onClick={handleNextClick}
				>
					{selectedIndex > -1 ? formatMessage({ id: 'button.save_changes' }) : formatMessage({ id: 'button.add_payment_method' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
