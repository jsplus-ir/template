import { CSSObject } from '@emotion/react';

/**
 * @description
 * Import fonts css
 */
const fontFace: CSSObject[] = [
	{
		'@font-face': {
			fontFamily: 'Vazirmatn',
			src: `url('/fonts/Vazirmatn/Vazirmatn-Regular.woff2') format('woff2')`,
			fontWeight: 400,
			fontStyle: 'normal',
			fontDisplay: 'swap',
		},
	},
	{
		'@font-face': {
			fontFamily: 'Vazirmatn',
			src: `url('/fonts/Vazirmatn/Vazirmatn-Medium.woff2') format('woff2')`,
			fontWeight: 500,
			fontStyle: 'normal',
			fontDisplay: 'swap',
		},
	},
	{
		'@font-face': {
			fontFamily: 'Vazirmatn',
			src: `url('/fonts/Vazirmatn/Vazirmatn-Bold.woff2') format('woff2')`,
			fontWeight: 700,
			fontStyle: 'normal',
			fontDisplay: 'swap',
		},
	},
	{
		'@font-face': {
			fontFamily: 'Tanha',
			src: `url('/fonts/Tanha/Tanha.woff2') format('woff2')`,
			fontWeight: 400,
			fontStyle: 'normal',
			fontDisplay: 'swap',
		},
	},
];

export default fontFace;
