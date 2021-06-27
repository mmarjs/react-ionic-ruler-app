import { Box, makeStyles } from '@material-ui/core';
import { IPaymentMethodItemProps } from './PaymentMethodItem.types';
import { IconButton, Link, Text } from 'components';
import { styles } from './PaymentMethodItem.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const PaymentMethodItem: React.FunctionComponent<IPaymentMethodItemProps> = ({ handleShowClick, handleRemoveClick, cardData }) => {
	let privateCardNumber = '';

	if (cardData && cardData.cardNumber) {
		for (let i = 12; i < 16; i++) {
			privateCardNumber += cardData.cardNumber[i];
		}
	}
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });

	return (
		<Box className={classes.paymentMethodItemContainer}>
			<Box className={classes.paymentMethodItem}>
				<IconButton
					iconProps={{ iconName: 'white-trash', primaryColor: isDarkMode ? '#181c19' : '#fff' }}
					className={classes.trashIcon}
					onClick={handleRemoveClick}
				/>
				<Link className={classes.cardTypeText} onClick={handleShowClick}>
					MasterCard
				</Link>
				<Box className={classes.cardNumberTextWrapper}>
					<Text className={classes.cardNumberText}>****</Text>
					<Text className={classes.cardNumberText}>****</Text>
					<Text className={classes.cardNumberText}>****</Text>
					<Text className={classes.cardNumberText}>{privateCardNumber}</Text>
				</Box>
			</Box>
		</Box>
	);
};
