declare type EmotionStyles = CSSObject | CSSObject[];

import { CSSObject } from '@emotion/react';
import { MantineTheme } from '@mantine/core';
import { fontFace, resetStyle, globalClass } from './utils/index';

const GlobalStyles = (theme: MantineTheme): EmotionStyles => {
	return [...fontFace, resetStyle(theme), globalClass(theme)];
};

export default GlobalStyles;
