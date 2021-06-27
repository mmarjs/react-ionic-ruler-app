import { Box, makeStyles } from '@material-ui/core';
import { Button, Dialog, GreenButton, Icon, IconButton, LightGreenButton, Link, Page, Text } from 'components';
import { ITemplateDataProps } from './pages/Template/Template.types';
import { IWalletsProps } from './Wallets.types';
import { useDarkMode } from 'hooks/UseDarkMode';
// import { paymentTemplate } from './Wallets.data';
import { styles } from './Wallets.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import React from 'react';

const useStyles = makeStyles(styles);

export const Wallets: React.FunctionComponent<IWalletsProps> = props => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [from, setFrom] = React.useState(false);
	const [showDialog, setShowDialog] = React.useState<boolean>(false);
	// const [paymentTemplateData, setPaymentTemplateData] = React.useState(paymentTemplate);
	const [paymentTemplateData, setPaymentTemplateData] = React.useState<ITemplateDataProps[]>([]);
	const [walletTypes, setWalletTypes] = React.useState<string[]>([]);
	const [amount, setAmount] = React.useState<string>('100');
	const [ruler, setRuler] = React.useState<number>(250);
	React.useEffect(() => {
		const params: any = props.location.state;
		const showDialog = params && params.showDialog ? params.showDialog : false;
		const data = params && params.paymentTemplate ? params.paymentTemplate : null;
		const selectedIndex = params && params.index > -1 ? params.index : -1;
		const newWallet = params && params.newWallet ? params.newWallet : '';
		const amount = params && params.amount ? params.amount : '';
		const from = params && params.from;
		setFrom(from);
		setShowDialog(showDialog);

		if (amount) {
			setAmount(amount);
			setRuler(Math.floor((Number(amount) * 250) / 100));
		}

		if (newWallet) {
			const temp = walletTypes;
			const index = temp.findIndex(data => data === newWallet);

			if (index > -1) {
				temp.splice(index, 1, newWallet);
				setWalletTypes([...temp]);
			} else {
				setWalletTypes(prevData => [...prevData, newWallet]);
			}
		}

		if (data) {
			if (selectedIndex > -1) {
				// update
				const temp = paymentTemplateData;
				temp.splice(selectedIndex, 1, data);
				setPaymentTemplateData([...temp]);
			} else {
				// add
				const temp = paymentTemplateData;
				const index = temp.findIndex(dt => dt.templateName === data.templateName);

				if (index > -1) {
					// if newly created template name already exists... please replace
					temp.splice(index, 1, data);
					setPaymentTemplateData([...temp]);
				} else {
					setPaymentTemplateData(prevData => [...prevData, data]);
				}
			}
		} else {
			if (selectedIndex > -1) {
				// delete
				const temp = paymentTemplateData;
				temp.splice(selectedIndex, 1);
				setPaymentTemplateData([...temp]);
			}
		}
	}, [props.location.state]);

	const handleCreateWallet = (): void => history.push('/wallets/create-wallet');

	const handleAddFunds = (): void => history.push('/wallets/add-funds', { wallets: walletTypes });

	const handleTransfer = (): void => history.push('/wallets/transfer', { data: paymentTemplateData, wallets: walletTypes });

	const handleAddTemplate = (): void => history.push('/wallets/template', { wallets: walletTypes });

	const handleTemplateClick = (index: number, template: ITemplateDataProps): void => {
		history.push('/wallets/template', { template: template, selectedIndex: index });
	};

	const handleDialogClose = (): void => {
		setShowDialog(false);
		history.replace('/wallets');
	};

	const handleLinkClick = (): void => {
		history.push('/payment-methods', { from: true });
	};

	return (
		<Page
			title={formatMessage({ id: 'wallets.title' })}
			titleSize="large"
			headerLink="Payment methods"
			headerLinkProps={{ onClick: handleLinkClick }}
			mainPage
			from={from}
			noHorizontalContentPadding
		>
			<Box className={classes.walletsLogoContainer}>
				<Box className={classes.walletsLogo}>
					<IconButton iconProps={{ iconName: 'white-trash', color: '#ffffff' }} className={classes.trashIcon} />
					<Link className={classes.rulerWalletText} onClick={(): void => history.push('/wallets/ruler-wallet', { amount: amount })}>
						{formatMessage({ id: 'wallets.logo_title' })}
					</Link>
					<Text className={classes.rulerPriceText}>
						€ {amount} = {ruler} Ruler
					</Text>
					<Text className={classes.rulerNumberText}>{ruler} Ruler</Text>
				</Box>
			</Box>
			<Box className={classes.paymentTemplateContainer}>
				<Text className={classes.paymentTemplateText}>{formatMessage({ id: 'wallets.payment_templates' })}</Text>
				<Box className={classes.TemplateButtonsWrapper}>
					<Fab aria-label="add" className={classes.addFabButton} onClick={handleAddTemplate}>
						<Icon iconName={isDarkMode ? 'white-add' : 'add-without-circle'} />
					</Fab>
					{paymentTemplateData.map((template, index) => (
						<Button
							key={index}
							fullWidth={false}
							className={classes.paymentTemplateButton}
							compact
							iconName="edit"
							iconPosition="right"
							onClick={(): void => handleTemplateClick(index, template)}
						>
							{template.templateName}
						</Button>
					))}
				</Box>
			</Box>
			<Box className={classes.footer}>
				<Box className={classes.buttonWrapper}>
					{isDarkMode ? (
						<GreenButton compact iconName="add" onClick={handleCreateWallet} className={classes.walletTransferButton}>
							{formatMessage({ id: 'wallets.add_wallet' })}
						</GreenButton>
					) : (
						<LightGreenButton compact iconName="add" onClick={handleCreateWallet}>
							{formatMessage({ id: 'wallets.add_wallet' })}
						</LightGreenButton>
					)}
					{isDarkMode ? (
						<GreenButton compact iconName="transfer" onClick={handleTransfer} className={classes.walletTransferButton}>
							{formatMessage({ id: 'wallets.transfer' })}
						</GreenButton>
					) : (
						<LightGreenButton compact iconName="transfer" onClick={handleTransfer}>
							{formatMessage({ id: 'wallets.transfer' })}
						</LightGreenButton>
					)}
				</Box>
				<GreenButton compact iconName="wallet" onClick={handleAddFunds}>
					{formatMessage({ id: 'wallets.add_funds' })}
				</GreenButton>
			</Box>
			<Dialog
				open={showDialog}
				hasClose
				illustrationName="superman"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
				title={formatMessage({ id: 'wallets.create_wallet.dialog.title' })}
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'wallets.create_wallet.dialog.description' })}</Text>
			</Dialog>
		</Page>
	);
};
