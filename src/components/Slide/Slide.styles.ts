import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const slide: CSSProperties = {
	position: 'relative',
	overflow: 'hidden',
	justifyContent: 'flex-start'
};

const imageContainer: CSSProperties = {
	zIndex: 0,
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	'& img': {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '100%',
		maxWidth: '100%',
		maxHeight: '100%',
		userSelect: 'none',
		userDrag: 'none'
	}
};

const title: CSSProperties = {
	paddingBottom: 10
};

const description: CSSProperties = {
	height: 100,
	marginBottom: 0,
	opacity: 0.5,
	...font({
		fontFamily: 'Montserrat',
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#000000'
	})
};

const slideContent: CreateCSSProperties = {
	// zIndex: -1,
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: (props: any) =>
		props.index === 0
			? `calc(${props.imageStyle.height} - ${pxToRem(65)} + ${props.imageStyle.top})`
			: `calc(${props.imageStyle.height} + ${pxToRem(25)} + ${props.imageStyle.top})`,
	textAlign: 'left',
	marginTop: -5
};

export const styles = createStyles({
	imageContainer,
	slide,
	title,
	description,
	slideContent
});
