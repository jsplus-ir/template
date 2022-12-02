import { createEmotionCache } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';

const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	prepend: true,
	stylisPlugins: [rtlPlugin],
});

export default rtlCache;
