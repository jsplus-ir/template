// @ts-nocheck
import type { MantineThemeOverride } from '@mantine/core';

import Values from 'values.js';

/**
 * @description
 * Get tints and shades of a color
 */
const colors = (color: string): [string, string, string, string, string, string, string, string, string, string] => {
	const colorValues = new Values(color);

	const tints = colorValues
		.tints(10)
		.slice(0, 4)
		.map((c) => c.hexString())
		.reverse() as [string, string, string, string];

	const shades = colorValues
		.shades(10)
		.slice(0, 5)
		.map((c) => c.hexString()) as [string, string, string, string, string];

	return [...tints, color, ...shades];
};

/**
 * @description
 * Mantine theme object
 */
const ThemeOptions: MantineThemeOverride = {
	colorScheme: 'dark',
	focusRing: 'auto',
	focusRingStyles: {
		// reset styles are applied to <button /> and <a /> elements
		// in &:focus:not(:focus-visible) selector to mimic
		// default browser behavior for native <button /> and <a /> elements
		resetStyles: (theme) => {
			return {
				outline: 'none',
				[theme.fn.smallerThan('md')]: { boxShadow: `0 0 4px 1px ${theme.colors.light[7]}` },
			};
		},

		// styles applied to all elements expect inputs based on Input component
		// styled are added with &:focus selector
		styles: (theme) => ({ outline: `1px solid ${theme.colors.light[6]}` }),

		// focus styles applied to components that are based on Input
		// styled are added with &:focus selector
		inputStyles: (theme) => ({ outline: `1px solid ${theme.colors.light[6]}` }),
	},
	cursorType: 'pointer',
	defaultRadius: 'sm',
	white: '#fff',
	black: '#000',
	colors: {
		/**
		 * A visual representation of color shading
		 * https://react-ts-ay9bqu.stackblitz.io/
		 * https://stackblitz.com/edit/react-ts-ay9bqu
		 */
		'dark': colors('#05060b'),
		'gray': colors('#6c757d'),
		'red': colors('#dc3545'),
		'pink': colors('#e83e8c'),
		'violet': colors('#6f42c1'),
		'indigo': colors('#6610f2'),
		'blue': colors('#007bff'),
		'cyan': colors('#17a2b8'),
		'teal': colors('#20c997'),
		'green': colors('#28a745'),
		'lime': colors('#61CE70'),
		'yellow': colors('#ffc107'),
		'orange': colors('#fd7e14'),

		// Custom Colors
		'light': colors('#f8f9fa'),
		'gray-dark': colors('#343a40'),
		'primary': colors('#007bff'),
		'secondary': colors('#6c757d'),
		'success': colors('#28a745'),
		'info': colors('#17a2b8'),
		'warning': colors('#ffc107'),
		'danger': colors('#dc3545'),
		'brown': colors('#533439'),
		'terracotta': colors('#C16244'),
		'red-dark': colors('#a50c0f'),
	},
	primaryColor: 'blue',
	primaryShade: 4,
	fontFamily:
		"Tanha, Arial, Tahoma, 'Times New Roman', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	lineHeight: 1.9,
	fontFamilyMonospace: 'Consolas, "Lucida Console", Monaco, monospace',
	fontSizes: {
		xs: 14,
		sm: 15,
		md: 16,
		lg: 17,
		xl: 18,
	},
	radius: {
		xs: 4,
		sm: 6,
		md: 8,
		lg: 10,
		xl: 12,
	},
	spacing: {
		xs: 6,
		sm: 8,
		md: 10,
		lg: 14,
		xl: 16,
	},
	activeStyles: {
		transform: 'scale(0.99)',
		filter: 'brightness(0.9)',
	},
	headings: {
		fontFamily:
			"Tanha, Arial, Tahoma, 'Times New Roman', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		fontWeight: 600,
		sizes: {
			h1: { lineHeight: 1.9, fontSize: 30, fontWeight: 700 },
			h2: { lineHeight: 1.9, fontSize: 26, fontWeight: 700 },
			h3: { lineHeight: 1.9, fontSize: 24 },
			h4: { lineHeight: 1.9, fontSize: 22 },
			h5: { lineHeight: 1.9, fontSize: 20 },
			h6: { lineHeight: 1.9, fontSize: 18 },
		},
	},
	dir: 'rtl',
	loader: 'oval',
	defaultRadius: 0,
	transitionTimingFunction: 'ease-in-out',
	breakpoints: {
		xs: 576,
		sm: 768,
		md: 992,
		lg: 1200,
		xl: 1400,
	},
};

export default ThemeOptions;
