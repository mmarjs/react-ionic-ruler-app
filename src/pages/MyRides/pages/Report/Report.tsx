import { Box, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { Icon, IconButton, Page, Text } from 'components';
import { IonImg } from '@ionic/react';
import { styles } from './Report.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const Report: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const { formatMessage } = useIntl();
	const [msg, setMsg] = React.useState('');
	const [rowsNum, setRowsNum] = React.useState(0);
	const classes = useStyles({ rowsNum, isDarkMode: isDarkMode });
	const [imagesReady, setImagesReady] = React.useState(false);
	const [selectedFiles, setSelectedFiles] = React.useState<(string | ArrayBuffer | null)[]>([]);
	const [messages, setMessages] = React.useState<any[]>([]);
	const [heightDifference, setHeightDifference] = React.useState(0);
	const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>): void => setMsg(event.target.value);

	const handleUploadClick = (event: any): void => {
		setImagesReady(true);
		const files = event.target.files;

		for (const file of files) {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onloadend = (): void => {
				setSelectedFiles(prevFiles => [...prevFiles, reader.result]);
			};
		}
	};
	React.useEffect(() => {
		let temp = 0;
		temp = selectedFiles.length / Math.floor((window.innerWidth - 40 - 50) / 100);

		if (selectedFiles.length % Math.floor((window.innerWidth - 40 - 50) / 100) === 0) {
			setRowsNum(temp);
		} else {
			setRowsNum(Math.floor(temp) + 1);
		}
	}, [selectedFiles]);

	const removeImage = (index: number) => (): void => {
		const temp = selectedFiles;
		temp.splice(index, 1);
		setSelectedFiles([...temp]);
	};

	const handleSendButtonClick = (): void => {
		const sHeight = document.querySelector('#report-content')?.scrollHeight;
		const cHeight = document.querySelector('#report-content')?.clientHeight;

		if (sHeight !== undefined && cHeight !== undefined) {
			const heightDifference = sHeight - cHeight;
			setHeightDifference(heightDifference);
		}

		if (selectedFiles.length > 0) {
			setMessages(prevMessages => [...prevMessages, selectedFiles]);
		}

		if (msg !== '') {
			setMessages(prevMessages => [...prevMessages, msg]);
		}

		setMsg('');
		setSelectedFiles([]);
		setImagesReady(false);
	};

	const renderSupportMessage = (): JSX.Element => {
		return (
			<Box className={classes.supportMsgWrapper}>
				<Text className={classes.msgText} color="#181c19">
					{formatMessage({ id: 'my_rides.report.support_message' })}
				</Text>
				<Box className={classes.timeTextWrapper}>
					<Text className={classes.smallText} black>
						{/* {formatMessage({ id: 'my_rides.report.support_time' })} */}
						{sentTime()}
					</Text>
				</Box>
				<Box className={classes.writerTextWrapper}>
					<Text className={classes.smallText} black>
						{formatMessage({ id: 'my_rides.report.support' })}
					</Text>
				</Box>
			</Box>
		);
	};

	const sentTime = (): string => {
		const currentDate = new Date();
		const month = currentDate.getMonth() + 1;
		const date = currentDate.getDate();
		const hour = currentDate.getHours();
		const minute = currentDate.getMinutes();
		let displayMonth = '';
		let displayTime = '';

		if (month === 1) {
			displayMonth = 'Jan';
		} else if (month === 2) {
			displayMonth = 'Feb';
		} else if (month === 3) {
			displayMonth = 'Mar';
		} else if (month === 4) {
			displayMonth = 'Apr';
		} else if (month === 5) {
			displayMonth = 'May';
		} else if (month === 6) {
			displayMonth = 'Jun';
		} else if (month === 7) {
			displayMonth = 'Jul';
		} else if (month === 8) {
			displayMonth = 'Aug';
		} else if (month === 9) {
			displayMonth = 'Sep';
		} else if (month === 10) {
			displayMonth = 'Oct';
		} else if (month === 11) {
			displayMonth = 'Nov';
		} else if (month === 11) {
			displayMonth = 'Dec';
		}

		if (hour < 12) {
			displayTime = hour + ':' + minute + ' am, ' + displayMonth + ' ' + date;
		} else {
			if (hour === 12) {
				displayTime = hour + ':' + minute + ' pm, ' + displayMonth + ' ' + date;
			} else {
				displayTime = hour - 12 + ':' + minute + ' pm, ' + displayMonth + ' ' + date;
			}
		}

		return displayTime;
	};

	const renderSentMessage = (message: string, index: number): JSX.Element => {
		return (
			<Box key={index} className={classes.sentMsgWrapper}>
				<Box className={classes.msgWrapper}>
					<Text className={classes.msgText} color="#181c19">
						{message}
					</Text>
					<Box className={classes.timeTextWrapper}>
						<Text className={classes.smallText} black>
							{/* {formatMessage({ id: 'my_rides.report.your_time' })} */}
							{sentTime()}
						</Text>
					</Box>
					<Box className={classes.writerTextWrapper}>
						<Text className={classes.smallText} black>
							{formatMessage({ id: 'my_rides.report.you' })}
						</Text>
					</Box>
				</Box>
			</Box>
		);
	};

	const renderSentImages = (message: any[], index: number): JSX.Element => {
		return (
			<Box key={index} className={classes.sentImagesWrapper}>
				{message.map((file: any, index: number) => {
					return (
						index < 6 && (
							<Box key={index} className={classes.sentImageWrapper}>
								<IonImg className={classes.image} src={file} />
								{message.length > 6 && index === 5 && (
									<Box className={classes.imagesNumTextWrapper}>
										<Text className={classes.imagesNumText}>{`${index + 1} / ${message.length}`}</Text>
									</Box>
								)}
							</Box>
						)
					);
				})}
			</Box>
		);
	};

	const handleBackButtonClick = (): void => {
		document.querySelector('#report-content')?.scrollTo(0, heightDifference);
	};

	return (
		<Page title={formatMessage({ id: 'my_rides.report.title' })} titleSize="medium">
			<Box className={classes.reportContainer}>
				<Box className={classes.reportContent} id="report-content">
					{messages &&
						messages.map((message, index) => {
							if (typeof message === 'string') {
								if (index === 0) {
									return (
										<>
											{renderSentMessage(message, index)}
											{renderSupportMessage()}
										</>
									);
								} else {
									return renderSentMessage(message, index);
								}
							} else {
								if (index === 0) {
									return (
										<>
											{renderSentImages(message, index)}
											{renderSupportMessage()}
										</>
									);
								} else {
									return renderSentImages(message, index);
								}
							}
						})}
				</Box>
				<Box className={classes.footer}>
					{imagesReady && (
						<Box className={classes.nonSentImagesWrapper}>
							{selectedFiles &&
								selectedFiles.map((file: any, index: number) => {
									return (
										<Box key={index} className={classes.nonSentImageWrapper}>
											<IonImg className={classes.image} src={file} />
											<IconButton className={classes.closeIcon} onClick={removeImage(index)} iconName="close" />
										</Box>
									);
								})}
						</Box>
					)}

					<Input
						disableUnderline
						multiline
						placeholder={formatMessage({ id: 'my_rides.report.message' })}
						value={msg}
						onChange={handleMsgChange}
						startAdornment={
							<InputAdornment position="start">
								<InputLabel htmlFor="file-upload" classes={{ root: classes.attach }}>
									<Icon iconName="attach" />
								</InputLabel>
								<input
									accept="image/*"
									className={classes.fileInput}
									multiple // Input component has not this props ?? So I used html input tag
									id="file-upload"
									type="file"
									onChange={handleUploadClick}
								/>
							</InputAdornment>
						}
						className={clsx({ [classes.messageInput]: true }, { [classes.attachIcon]: msg !== '' || selectedFiles.length > 0 })}
					/>
					<IconButton
						disabled={selectedFiles.length === 0 && msg === ''}
						className={classes.sendButton}
						iconProps={{ iconName: 'submit-report', color: '#ffffff' }}
						onClick={handleSendButtonClick}
					/>
					{heightDifference > 0 && <IconButton className={classes.backButton} iconName="down" onClick={handleBackButtonClick} />}
				</Box>
			</Box>
		</Page>
	);
};
