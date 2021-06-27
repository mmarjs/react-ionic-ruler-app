import { Box, InputAdornment, MenuItem, makeStyles } from '@material-ui/core';
import { GreenButton, IconButton, Page, Select, TextField } from 'components';
import { ITemplateDataProps, ITemplateProps } from './Template.types';
// import { paymentMethodTypes, walletTypes } from '../../Wallets.data';
import { paymentMethodTypes } from '../../Wallets.data';
import { styles } from './Template.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { validateNumber } from 'utils';
import React from 'react';
const useStyles = makeStyles(styles);

export const Template: React.FunctionComponent<ITemplateProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [walletType, setWalletType] = React.useState<string>('');
	const [paymentMethodType, setPaymentMethodType] = React.useState<string>('');
	const [amount, setAmount] = React.useState<string>('');
	const [numberValid, setNumberValid] = React.useState(true);
	const [templateName, setTemplateName] = React.useState<string>('');
	const [walletTypes, setWalletTypes] = React.useState<string[]>([]);
	const params: any = props.location.state;
	const selectedIndex = params && params.selectedIndex > -1 ? params.selectedIndex : -1;
	React.useEffect(() => {
		const params: any = props.location.state;
		const data = params && params.template ? params.template : null;
		const wallets = params && params.wallets ? params.wallets : null;

		if (wallets) setWalletTypes(wallets);
		setWalletType(data ? params.template.walletType : '');
		setPaymentMethodType(data ? params.template.paymentType : '');
		setAmount(data ? params.template.amount : '');
		setTemplateName(data ? params.template.templateName : '');
	}, [props.location.state]);

	const handleWalletTypeChange = (event: React.ChangeEvent<{ name?: string | undefined; value: string }>): void =>
		setWalletType(event.target.value);

	const handlePaymentMethodTypeChange = (event: React.ChangeEvent<{ name?: string | undefined; value: string }>): void =>
		setPaymentMethodType(event.target.value);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const amount = event.target.value;

		if (amount.includes(' ')) {
			const trimAmount = amount.replace(/\s/g, '');
			setAmount(trimAmount);
			setNumberValid(validateNumber(trimAmount));
		} else {
			setAmount(amount);
			setNumberValid(validateNumber(amount));
		}
	};

	const handleTemplateChange = (event: React.ChangeEvent<HTMLInputElement>): void => setTemplateName(event.target.value);

	const handleTrashClick = (): void => {
		history.push('/wallets', { index: selectedIndex });
	};

	const handleSaveChangeClick = (): void => {
		const paymentTemplate: ITemplateDataProps = {
			templateName: templateName,
			amount: amount,
			walletType: walletType,
			paymentType: paymentMethodType,
			walletAddress: ''
		};
		history.push('/wallets', { paymentTemplate: paymentTemplate, index: selectedIndex });
	};

	return (
		<Page
			title={formatMessage({ id: 'wallets.template.title' })}
			headerLink={
				selectedIndex > -1 ? <IconButton iconProps={{ iconName: isDarkMode ? 'white-trash' : 'trash' }} onClick={handleTrashClick} /> : ''
			}
			titleSize="medium"
		>
			<Box className={classes.templateWrapper}>
				<TextField
					name="templateName"
					label={formatMessage({ id: 'wallets.template.helper_text.payment_template' })}
					value={templateName}
					onValueChange={handleTemplateChange}
				/>
				<TextField
					name="insertAmount"
					error={!numberValid}
					helperText={!numberValid ? formatMessage({ id: 'wallets.number_helper_text' }) : ''}
					className={classes.textField}
					label={formatMessage({ id: 'wallets.add_funds.helper_text.amount_description' })}
					value={amount}
					onValueChange={handleAmountChange}
					inputProps={{
						startAdornment: (
							<InputAdornment position="start" className={classes.currencySymbol}>
								€
							</InputAdornment>
						)
					}}
				/>
				<Select
					name="rulerToken"
					className={classes.textField}
					label={formatMessage({ id: 'wallets.template.helper_text.from_wallet_card' })}
					value={walletType}
					onValueChange={handleWalletTypeChange}
				>
					{walletTypes.map(type => (
						<MenuItem key={type} className={classes.selectItem} value={type}>
							{type}
						</MenuItem>
					))}
				</Select>
				<Select
					className={classes.textField}
					name="paymentMethod"
					label={formatMessage({ id: 'wallets.template.helper_text.to_wallet_card' })}
					value={paymentMethodType}
					onValueChange={handlePaymentMethodTypeChange}
				>
					{paymentMethodTypes.map(type => (
						<MenuItem key={type.value} className={classes.selectItem} value={type.value}>
							{formatMessage({ id: type.label })}
						</MenuItem>
					))}
				</Select>
			</Box>
			<GreenButton
				className={classes.saveButton}
				disabled={!templateName || !amount || !numberValid || !walletType || !paymentMethodType}
				iconName={selectedIndex > -1 ? 'well-done-checked' : 'add'}
				compact
				onClick={handleSaveChangeClick}
			>
				{selectedIndex > -1 ? formatMessage({ id: 'button.save_changes' }) : formatMessage({ id: 'button.add_new_template' })}
			</GreenButton>
		</Page>
	);
};
