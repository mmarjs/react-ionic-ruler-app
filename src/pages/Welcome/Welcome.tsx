import { BlackButton, FullPage, Link, SocialIconButton, Text } from 'components';
import { Box, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Stack } from '@fluentui/react';
import { styles } from './Welcome.styles';
import { useDarkMode } from 'hooks/UseDarkMode';
import { useHistory } from 'react-router-dom';
import Background from './images/bg.svg';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const Welcome: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const history = useHistory();

	return (
		// <FullPage canGoBack className={classes.page} goBackIconButtonProps={{ noShadow: false }}>
		<FullPage className={classes.page}>
			<Box className={classes.backgroundContainer}>
				<img className={clsx(classes.background, classes.image)} src={Background} alt="background" />
			</Box>
			<Box className={classes.content}>
				<Stack horizontalAlign="stretch" verticalAlign="space-between" verticalFill>
					<Stack.Item>
						<Text className={classes.welcomeText} block>
							<FormattedMessage id="welcome.text.welcome_to_ruler" />
						</Text>
						<BlackButton
							iconName="create-account"
							compact
							onClick={(): void => history.push('/welcome/create-account')}
							className={classes.notRecommendedButton}
						>
							<FormattedMessage id="welcome.button.create_account" />
						</BlackButton>
					</Stack.Item>
					<Stack.Item>
						<Text className={classes.signInWithSocialsText} block>
							<FormattedMessage id="welcome.text.sign_in_with_socials" />
						</Text>
						<Stack horizontal horizontalAlign="space-between" verticalAlign="center">
							<SocialIconButton iconName="apple" />
							<SocialIconButton iconName="twitter" />
							<SocialIconButton iconName="google" />
							<SocialIconButton iconName="facebook" />
						</Stack>
					</Stack.Item>

					<Stack.Item>
						<Text className={classes.alreadyHaveAnAccountText} block>
							<FormattedMessage id="welcome.text.already_have_an_account" />
							<Link href="/welcome/login">
								<FormattedMessage id="welcome.text.login" />
							</Link>
						</Text>
					</Stack.Item>
				</Stack>
			</Box>
		</FullPage>
	);
};
