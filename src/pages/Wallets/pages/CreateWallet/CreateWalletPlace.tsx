import { Box, makeStyles } from '@material-ui/core';
import { Button, GreenButton, Page, Text } from 'components';
import { ICreateWalletProps } from './CreateWallet.types';
import { createWalletWords } from '../../Wallets.data';
import { styles } from './CreateWallet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const CreateWalletPlace: React.FunctionComponent<ICreateWalletProps> = props => {
	const { formatMessage } = useIntl();
	const history = useHistory();
	const params: any = props.location.state;
	const newWallet = params && params.newWallet ? params.newWallet : '';
	const [isShowError, setShowError] = React.useState<boolean>(false);
	const [words, setWords] = React.useState<string[]>([]);
	const [shuffleWords, setShuffleWords] = React.useState<string[]>([]);
	// const [selectedStatus, setSelectedStatus] = React.useState<boolean[]>([]);
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isShowError, isDarkMode: isDarkMode });

	const handleWordClick = (word: string, index: number): void => {
		if (words.length < createWalletWords.length) {
			const newWords = isShowError ? [word] : [...words, word];

			if (!createWalletWords.toString().startsWith(newWords.toString())) {
				setWords([]);
				// setSelectedStatus([]);
				setShowError(true);
			} else {
				setShowError(false);
				setWords(newWords);
				// const selected = selectedStatus;
				// selected[index] = !selected[index];
				// setSelectedStatus(selected);
			}
		}
	};

	const shuffle = (array: string[]): string[] => {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};
	React.useEffect(() => {
		const temp = [...createWalletWords];
		setShuffleWords(shuffle(temp));
		// const selectedStatus = temp.map(data => {
		// 	return false;
		// });
		// setSelectedStatus(selectedStatus);
	}, []);

	return (
		<Page title={formatMessage({ id: 'wallets.create_wallet.title' })} titleSize="medium" noHorizontalContentPadding>
			<Text className={classes.description} black>
				{formatMessage({ id: 'wallets.create_wallet.place.description' })}
			</Text>
			<Box className={clsx(classes.wordWrapper, classes.wordButtonWrapper)}>
				{shuffleWords.map((createWalletWord, index) => (
					<Button
						key={index}
						className={clsx(classes.wordButton, classes.wordText)}
						// disabled={selectedStatus[index]}
						onClick={(): void => handleWordClick(createWalletWord.toLowerCase(), index)}
						pressedBackgroundColor={isDarkMode ? '#181c19' : '#b3b3b3'}
						hoveredBackgroundColor={isDarkMode ? '#181c19' : '#303331'}
					>
						<Text className={classes.wordNumber} black>
							{index + 1}.
						</Text>
						<Text className={classes.wordName}>{createWalletWord.toLowerCase()}</Text>
					</Button>
				))}
				{isShowError && (
					<Box className={classes.errorWrapper}>
						<Text className={classes.errorText}>{formatMessage({ id: 'wallets.create_wallet.place.error_message' })}</Text>
					</Box>
				)}
			</Box>
			<Box className={classes.wordWrapper}>
				{createWalletWords.map((createWalletWord, index) => (
					<Box key={index} className={words[index] ? classes.wordText : classes.unsetWordText}>
						<Text className={classes.wordName}>{words[index] ? words[index].toLowerCase() : createWalletWord.toLowerCase()}</Text>
					</Box>
				))}
			</Box>
			<Box className={classes.footer}>
				<GreenButton
					className={classes.nextButton}
					onClick={(): void => history.replace('/wallets', { showDialog: true, newWallet: newWallet })}
					disabled={createWalletWords.length !== words.length}
				>
					{formatMessage({ id: 'button.next' })}
				</GreenButton>
			</Box>
		</Page>
	);
};
