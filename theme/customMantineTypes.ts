import { Tuple, DefaultMantineColor } from '@mantine/core';

/**
 * Custom colors types
 */
type ExtendedCustomColors =
	| 'light'
	| 'gray-dark'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'brown'
	| 'terracotta'
	| 'red-dark'
	| DefaultMantineColor;

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
	}
}
