import { Box, makeStyles } from '@material-ui/core';
import { IFooterProps } from './Footer.types';
import { Link } from 'components';
import { styles } from './Footer.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Footer: React.FunctionComponent<IFooterProps> = ({
	leftIcon,
	leftText,
	rightIcon,
	rightText,
	leftLinkProps,
	rightLinkProps
}) => {
	const classes = useStyles();

	return (
		<div className={classes.faqFooter}>
			<Box className={classes.li}>
				<Link colorType="black" iconName={leftIcon} {...leftLinkProps}>
					{leftText}
				</Link>
			</Box>
			<Box className={classes.li}>
				<Link colorType="black" iconName={rightIcon} {...rightLinkProps}>
					{rightText}
				</Link>
			</Box>
		</div>
	);
};
