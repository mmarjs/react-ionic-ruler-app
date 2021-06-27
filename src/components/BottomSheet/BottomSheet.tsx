import { IBottomSheetProps } from './BottomSheet.types';
import { IconButton } from 'components';
import { Typography, makeStyles } from '@material-ui/core';
import { pxToRem } from 'styles';
import { styles } from './BottomSheet.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import BackdropFilter from 'react-backdrop-filter';
import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
const useStyles = makeStyles(styles);

export const BottomSheet: React.FunctionComponent<IBottomSheetProps> = ({
	open,
	darkMode,
	outDecorator,
	onBottomSheetChange,
	children,
	title,
	description,
	hasBlackBar,
	hasCloseButton,
	hasFindMeButton,
	onCloseButtonClick
}) => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ darkMode, hasCloseButton, isDarkMode: isDarkMode });

	return (
		<div className={classes.sheetContainer}>
			{darkMode ? (
				<SwipeableBottomSheet
					bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
					overlayStyle={{ background: '#181c19', opacity: open ? 0.4 : 0 }}
					open={open}
					onChange={onBottomSheetChange}
				>
					{open && <div className={classes.outsideWrapper} />}
					<BackdropFilter filter="blur(40px)">
						<div className={classes.sheetWrapper}>
							<div className={classes.topWrapper}>
								<div className={classes.blackBar} />
								{title && <Typography className={classes.sheetTitle}>{title}</Typography>}
								{description && <Typography className={classes.sheetDescription}>{description}</Typography>}
							</div>
							{children}
						</div>
					</BackdropFilter>
				</SwipeableBottomSheet>
			) : (
				<SwipeableBottomSheet
					bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
					overlayStyle={{ background: '#181c19', opacity: open ? 0.4 : 0 }}
					open={open}
					onChange={onBottomSheetChange}
				>
					{hasCloseButton && open && (
						<IconButton className={classes.closeButton} iconName="close" colorType="black" onClick={onCloseButtonClick} />
					)}
					{hasFindMeButton && open && <IconButton className={classes.findMeButton} iconName="find-me" colorType="black" />}
					{outDecorator && open && <div className={classes.outsideWrapper} />}
					<div className={classes.sheetWrapper}>
						<div className={classes.topWrapper}>
							{hasBlackBar && <div className={classes.blackBar} />}
							{title && <Typography className={classes.sheetTitle}>{title}</Typography>}
							{description && <Typography className={classes.sheetDescription}>{description}</Typography>}
						</div>
						{children}
					</div>
				</SwipeableBottomSheet>
			)}
		</div>
	);
};
BottomSheet.defaultProps = {
	hasBlackBar: true
};
