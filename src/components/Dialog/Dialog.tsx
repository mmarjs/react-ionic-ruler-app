import { Box, DialogContent, DialogTitle, Dialog as MuiDialog } from '@material-ui/core';
import { IDialogProps } from './Dialog.types';
import { IconButton, Image, Text } from 'components';
import { IonImg } from '@ionic/react';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Dialog.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import React from 'react';
const useStyles = makeStyles(styles);

export const Dialog: React.FunctionComponent<IDialogProps> = ({
	title,
	image,
	illustrationName,
	open,
	hasClose,
	onClose,
	children,
	className,
	onImageDelete,
	...restProps
}) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ image, isDarkMode: isDarkMode });
	const [imagePath, setImagePath] = React.useState(image);

	React.useEffect(() => {
		if (illustrationName) {
			import(`./svg/${illustrationName}.svg`)
				.then(({ default: illustrationPath }) => {
					if (illustrationPath) {
						setImagePath(illustrationPath);
					}
				})
				.catch(() => console.warn(`No icon with the name \`${illustrationName}\` (\`${illustrationName}.svg\`) was found.`));
		}
	}, [illustrationName]);

	const handleDeleteAccountClose = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		onClose && onClose(e, 'escapeKeyDown');
	};

	return (
		<MuiDialog open={open} onClose={handleDeleteAccountClose} classes={{ paper: image ? classes.imagePaper : classes.modalPaper }}>
			{image && (
				<Box className={classes.imageWrapper}>
					{imagePath && (
						<Box className={classes.imageAspectRatioBox}>
							<Box className={classes.imageAspectRatioBoxInside}>
								<IonImg src={imagePath} className={classes.image} />
							</Box>
						</Box>
					)}
					<IconButton className={classes.trashIcon} iconProps={{ iconName: 'trash', colorType: 'green' }} onClick={onImageDelete} />
				</Box>
			)}
			{!image && (
				<Box>
					<Box className={classes.imgWrapper}>{imagePath && <Image src={imagePath} />}</Box>
					<DialogTitle classes={{ root: classes.dialogTitle }}>
						<Text color="primary" className={classes.titleTextStyle} block>
							{title}
						</Text>
					</DialogTitle>
					<DialogContent className={classes.dialogContent}>
						{hasClose && <IconButton iconName="close" classes={{ root: classes.closeBtn }} noShadow onClick={handleDeleteAccountClose} />}
						{children}
					</DialogContent>
				</Box>
			)}
		</MuiDialog>
	);
};
