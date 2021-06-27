import { Box, makeStyles } from '@material-ui/core';
import { Checkbox, Dialog, GreenButton, IconButton, Page, Text, TextField } from 'components';
import { IConfirmationProps } from './Confirmation.types';
import { ITemplateDataProps } from '../Template/Template.types';
import { styles } from './Confirmation.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
const copy = require('clipboard-copy');
const useStyles = makeStyles(styles);

export const Confirmation: React.FunctionComponent<IConfirmationProps> = props => {
	const history = useHistory();
	const { formatMessage } = useIntl();
	const params: any = props.location.state;
	const [checked, setChecked] = React.useState<boolean>(false);
	const isDarkMode = useDarkMode();
	const classes = useStyles({ checked, isDarkMode: isDarkMode });
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	const [templateName, setTemplateName] = React.useState<string>('');
	const transactionHash = 'a1075db55d416d3ca199f55b1BvBM3sdelkfdjsl';
	const from = params?.walletType ? params.walletType : '';
	const to = params?.walletAddress ? params.walletAddress : '';
	const amount = params?.amount ? params.amount : null;
	// React.useEffect(() => {
	// setTemplateName('');
	// setChecked(false);
	// }, [props.location.state]);

	const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();
		setChecked(event.target.checked);
	};

	const handleTemplateNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setTemplateName(event.target.value);
	};

	const handleCopyClick = (): void => copy(transactionHash);

	const handlePayClick = (): void => {
		setShowDialog(true);
	};

	const handleDialogClose = (): void => {
		setShowDialog(false);

		if (checked) {
			const paymentTemplate: ITemplateDataProps = {
				templateName: templateName,
				amount: amount,
				walletType: from,
				paymentType: 'credit_card',
				walletAddress: to
			};
			history.replace('/wallets', { paymentTemplate: paymentTemplate });
		} else {
			history.replace('/wallets');
		}
	};

	return (
		<Page
			pageHeaderClassName={classes.pageHeader}
			title={formatMessage({ id: 'wallets.confirmation.title' })}
			titleSize="medium"
			noHorizontalContentPadding
		>
			<Box className={classes.headerWrapper}>
				<Box className={classes.amountWrapper}>
					<Box className={classes.amountBox}>
						<Text className={classes.amountHelperText} color="rgba(255, 255, 255, 0.5)">
							{formatMessage({ id: 'wallets.confirmation.credited' })}
						</Text>
						<Text className={classes.amountText}>€ {amount}.00</Text>
					</Box>
					<Box className={classes.amountBox}>
						<Text className={classes.amountHelperText} color="rgba(255, 255, 255, 0.5)">
							{formatMessage({ id: 'wallets.confirmation.transaction_fee' })}
						</Text>
						<Text className={classes.amountText} color="rgba(255, 255, 255, 0.5)">
							€ 0.20
						</Text>
					</Box>
				</Box>
				<Text className={classes.amountHelperText} color="rgba(255, 255, 255, 0.5)">
					{formatMessage({ id: 'wallets.confirmation.transaction_hash' })}
				</Text>
				<Box className={classes.hashWrapper}>
					<Text className={classes.hashText}>{transactionHash}</Text>
					<IconButton className={classes.copyButton} iconProps={{ iconName: 'copy', color: '#ffffff' }} onClick={handleCopyClick} />
				</Box>
			</Box>
			<Box className={classes.infoWrapper}>
				<Box className={classes.fromBox}>
					<Text className={classes.amountHelperText}>{formatMessage({ id: 'wallets.confirmation.from' })}</Text>
					<Text className={classes.amountHelperText}>{from}</Text>
				</Box>
				<Box className={classes.toBox}>
					<Box>
						<Text className={classes.amountHelperText}>{formatMessage({ id: 'wallets.confirmation.to' })}</Text>
					</Box>
					<Box>
						<Text className={classes.amountHelperText}>{to}</Text>
					</Box>
				</Box>
			</Box>
			<Box className={classes.footer}>
				<Box className={classes.templateWrapper}>
					<Checkbox
						checked={checked}
						label={formatMessage({ id: 'wallets.confirmation.save_payment_template' })}
						onValueChange={handleCheckChange}
					/>
					<TextField
						className={classes.templateName}
						name="templateName"
						label={formatMessage({ id: 'wallets.template.helper_text.payment_template' })}
						value={templateName}
						onValueChange={handleTemplateNameChange}
					/>
				</Box>
				<GreenButton iconName="add-payment" compact onClick={handlePayClick} disabled={!templateName && checked}>
					{formatMessage({ id: 'button.pay' })}
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="superman"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.confirmation.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.confirmation.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
