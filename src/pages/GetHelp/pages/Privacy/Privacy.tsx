import { List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Page, SearchBox } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './Privacy.styles';
import { useDarkMode } from 'hooks/UseDarkMode';

import React from 'react';

const useStyles = makeStyles(styles);
const defaultQuestions = [
	{
		title: 'Terms & Conditions Austria - English',
		href: '/get-help/privacy/term-aus',
		type: 'austria'
	},
	{
		title: 'Privacy Policy Austria - English',
		href: '/get-help/privacy/policy-aus',
		type: 'austria'
	},
	{
		title: 'Terms & Conditions France - English',
		href: '/get-help/privacy/term-fra',
		type: 'france'
	},
	{
		title: 'Privacy Policy France - English',
		href: '/get-help/privacy/policy-fra',
		type: 'france'
	},
	{
		title: 'Terms & Conditions Germany - English',
		href: '/get-help/privacy/term-ger',
		type: 'germany'
	},
	{
		title: 'Privacy Policy Germany - English',
		href: '/get-help/privacy/policy-gem',
		type: 'germany'
	}
];

const types = [
	{
		type: 'austria',
		title: 'Austria'
	},
	{
		type: 'france',
		title: 'France'
	},
	{
		type: 'germany',
		title: 'Germany'
	}
];

export const Privacy: React.FunctionComponent = () => {
	const isDarkMode = useDarkMode();
	const classes = useStyles({ isDarkMode: isDarkMode });
	const [questions, setQuestions] = React.useState(defaultQuestions);

	const handleSearchBoxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const keywords = event.target.value.toLowerCase();
		const filteredQuestions = defaultQuestions.filter(item => item.title.toLowerCase().includes(keywords.toLowerCase()));
		setQuestions(filteredQuestions);
	};

	return (
		<Page title="Privacy policy" titleSize="medium">
			<SearchBox className={classes.searchBox} onChange={handleSearchBoxChange} />
			{types.map((type, index) => {
				const typeQuestions = questions.filter(item => item.type === type.type);

				return (
					<div key={`${index}-type`}>
						{typeQuestions.length > 0 && <Typography className={classes.subHeader}>{type.title}</Typography>}
						<List className={classes.list}>
							{typeQuestions.map((question, index) => (
								<ListItem key={index} className={classes.listItem} component={RouterLink} to={question.href}>
									<ListItemText primary={question.title} classes={{ primary: classes.text }} />
								</ListItem>
							))}
						</List>
					</div>
				);
			})}
		</Page>
	);
};
