import { CSSObject } from '@emotion/react';
import { MantineTheme } from '@mantine/core';

/**
 * @description
 * Reset css
 */
const resetStyle = (theme: MantineTheme): CSSObject => {
	return {
		':root': {
			fontSize: '15px',
			scrollBehavior: 'smooth',
		},

		'html, body': {
			maxWidth: '100vw',
			minHeight: '100vh',
		},

		'body': {
			margin: 0,
			padding: 0,
			outline: 'none',
			border: 'none',
			direction: 'rtl',
			overflowX: 'hidden',
			overflowY: 'auto',
			fontSize: '1rem',
			fontWeight: 'normal',
			color: '#dfdfdf',
			backgroundColor: '#1f2235',
			textAlign: 'right',
			WebkitTextSizeAdjust: '100%',
			WebkitTapHighlightColor: 'transparent',
		},

		'p': {
			margin: 0,
			padding: 0,
		},

		'h1,h2,h3,h4,h5,h6': {
			margin: 0,
			marginBottom: '0.5rem !important',
			padding: 0,
			fontFamily:
				"Tanha, Arial, Tahoma, 'Times New Roman', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
			fontWeight: 600,
			lineHeight: 1.9,
			color: 'inherit',
		},

		'h1': {
			fontSize: 30,
			fontWeight: 700,
		},

		'h2': {
			fontSize: 26,
			fontWeight: 700,
		},

		'h3': {
			fontSize: 24,
		},

		'h4': {
			fontSize: 22,
		},

		'h5': {
			fontSize: 20,
		},

		'h6': {
			fontSize: 18,
		},

		'ol,ul': {
			paddingRight: 0,
			listStylePosition: 'inside',
		},

		'blockquote': {
			margin: '0 0 1rem',
		},

		'a': {
			color: 'inherit',
			textDecoration: 'none',
		},

		"[type='email'],[type='number'],[type='tel'],[type='url']": {
			'&:not(:placeholder-shown)': {
				direction: 'ltr',
			},
		},

		'img,button,label,i,svg': {
			userSelect: 'none',
		},

		'audio,video': {
			display: 'block',
		},

		'video': {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},

		'textarea': {
			maxWidth: '100%',
			minWidth: '100%',
		},

		'button,a,input': {
			'&:disabled, &.disabled': {
				cursor: 'not-allowed',
			},
		},

		'a,span,input,button,label,em,img,i,svg,time': {
			display: 'inline-block',
		},

		'button,input,optgroup,select,textarea': {
			fontFamily: 'inherit',
		},

		/**
		 * My Style Reset
		 */
		'a,a::after,a::before,button::after,button::before': {
			transition: 'all 0.15s ease',
		},

		'img': {
			objectFit: 'cover',
		},

		'::-moz-selection': {
			backgroundColor: theme.colors.red[4],
			color: theme.colors.light[4],
			textShadow: `0 0 1px ${theme.colors.dark[9]}`,
		},

		'::selection': {
			backgroundColor: theme.colors.red[4],
			color: theme.colors.light[4],
			textShadow: `0 0 1px ${theme.colors.dark[9]}`,
		},
	};
};

export default resetStyle;
