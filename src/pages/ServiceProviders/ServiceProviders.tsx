import { IServiceProvidersProps } from './ServiceProviders.types';
import { List } from '@material-ui/core';
import { Page } from 'components';
import { ProviderListItem } from './components';
import { makeStyles } from '@material-ui/styles';
import { styles } from './ServiceProviders.styles';
import { unifyIdentifier } from 'utils';
import { useHistory, useParams } from 'react-router';
import { useIntl } from 'react-intl';
import React from 'react';
import providersData from './providers-data.json';

const useStyles = makeStyles(styles);
const resolvePath = (src: string): string => require(`${src}`);

export const ServiceProviders: React.FunctionComponent<IServiceProvidersProps> = () => {
	const history = useHistory();
	const params = useParams<{ provider?: string }>();
	const classes = useStyles();
	const { formatMessage } = useIntl();

	const currentProviderName = params.provider && unifyIdentifier(params.provider);
	const currentProvider =
		currentProviderName &&
		providersData.providers.find(provider => unifyIdentifier(formatMessage({ id: provider.name })) === currentProviderName);

	const handleProviderClick = (provider: string) => (): void => history.push(`/service-providers/${provider}`);

	const title = currentProvider ? formatMessage({ id: currentProvider.name }) : formatMessage({ id: 'service_providers.title' });

	return (
		<Page title={title} titleSize="large" noHorizontalContentPadding>
			<List className={classes.providerList}>
				{currentProvider
					? currentProvider.paragraphs.map(paragraph => (
							<ProviderListItem
								key={paragraph.title}
								primaryText={formatMessage({ id: paragraph.title })}
								secondaryText={formatMessage({ id: paragraph.text })}
								providerIconProps={{
									src: resolvePath(currentProvider.logo),
									alt: formatMessage({ id: currentProvider.name })
								}}
							/>
					  ))
					: providersData.providers.map(provider => (
							<ProviderListItem
								key={provider.name}
								primaryText={formatMessage({ id: provider.name })}
								secondaryText={formatMessage({ id: provider.subtext })}
								canGoTo
								providerIconProps={{
									src: resolvePath(provider.logo),
									alt: formatMessage({ id: provider.name })
								}}
								onClick={handleProviderClick(unifyIdentifier(formatMessage({ id: provider.name })))}
							/>
					  ))}
			</List>
		</Page>
	);
};
