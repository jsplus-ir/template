import { CSSObject } from '@emotion/react';
import { MantineTheme } from '@mantine/core';

/**
 * @description
 * These are the most important Bootstrap V5 utilities css classes
 */
const importantBsClases: CSSObject = {
	'.fw-light': { fontWeight: '300 !important' },
	'.fw-normal': { fontWeight: '400 !important' },
	'.fw-medium': { fontWeight: '500 !important' },
	'.fw-bold': { fontWeight: '700 !important' },
	'.list-inline,.list-unstyled': {
		listStyle: 'none !important',
		paddingRight: '0 !important',
	},
	'.ratio': { position: 'relative', width: '100%' },
	'.ratio::before': {
		display: 'block',
		paddingTop: 'var(--aspect-ratio)',
		content: "''",
	},
	'.ratio > *': {
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%',
	},
	'.ratio-1x1': { '--aspect-ratio': '100%' },
	'.ratio-4x3': { '--aspect-ratio': '75%' },
	'.ratio-16x9': { '--aspect-ratio': '56.25%' },
	'.ratio-21x9': { '--aspect-ratio': '42.8571428571%' },
	'.sticky-top': {
		position: ['-webkit-sticky', 'sticky'],
		top: '0',
		zIndex: 1020,
	},
	'.sticky-bottom': {
		position: ['-webkit-sticky', 'sticky'],
		bottom: '0',
		zIndex: 1020,
	},
	'.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within)': {
		position: 'absolute !important' as 'absolute',
		width: '1px !important',
		height: '1px !important',
		padding: '0 !important',
		margin: '-1px !important',
		overflow: 'hidden !important',
		clip: 'rect(0, 0, 0, 0) !important',
		whiteSpace: 'nowrap !important' as 'nowrap',
		border: '0 !important',
	},
	'.text-truncate': {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	'.float-start': { cssFloat: 'right !important' },
	'.float-end': { cssFloat: 'left !important' },
	'.float-none': { cssFloat: 'none !important' },
	'.overflow-auto': { overflow: 'auto !important' },
	'.overflow-hidden': { overflow: 'hidden !important' },
	'.overflow-visible': { overflow: 'visible !important' },
	'.overflow-scroll': { overflow: 'scroll !important' },
	'.d-inline': { display: 'inline !important' },
	'.d-inline-block': { display: 'inline-block !important' },
	'.d-block': { display: 'block !important' },
	'.d-grid': { display: 'grid !important' },
	'.d-flex': { display: 'flex !important' },
	'.d-inline-flex': { display: 'inline-flex !important' },
	'.d-none': { display: 'none !important' },
	'.shadow-none': { boxShadow: 'none !important' },
	'.position-static': { position: 'static !important' as 'static' },
	'.position-relative': { position: 'relative !important' as 'relative' },
	'.position-absolute': { position: 'absolute !important' as 'absolute' },
	'.position-fixed': { position: 'fixed !important' as 'fixed' },
	'.position-sticky': {
		position: 'sticky !important' as 'sticky',
	},
	'.top-0': { top: '0 !important' },
	'.bottom-0': { bottom: '0 !important' },
	'.start-0': { right: '0 !important' },
	'.end-0': { left: '0 !important' },
	'.border-0': { border: '0 !important' },
	'.w-100': { width: '100% !important' },
	'.w-auto': { width: 'auto !important' },
	'.mw-100': { maxWidth: '100% !important' },
	'.vw-100': { width: '100vw !important' },
	'.min-vw-100': { minWidth: '100vw !important' },
	'.h-100': { height: '100% !important' },
	'.h-auto': { height: 'auto !important' },
	'.mh-100': { maxHeight: '100% !important' },
	'.vh-100': { height: '100vh !important' },
	'.min-vh-100': { minHeight: '100vh !important' },
	'.flex-fill': { flex: '1 1 auto !important' },
	'.flex-row': { flexDirection: 'row !important' as 'row' },
	'.flex-column': { flexDirection: 'column !important' as 'column' },
	'.flex-row-reverse': { flexDirection: 'row-reverse !important' as 'row-reverse' },
	'.flex-column-reverse': { flexDirection: 'column-reverse !important' as 'column-reverse' },
	'.flex-grow-0': { flexGrow: '0 !important' },
	'.flex-grow-1': { flexGrow: '1 !important' },
	'.flex-shrink-0': { flexShrink: '0 !important' },
	'.flex-shrink-1': { flexShrink: '1 !important' },
	'.flex-wrap': { flexWrap: 'wrap !important' as 'wrap' },
	'.flex-nowrap': { flexWrap: 'nowrap !important' as 'nowrap' },
	'.flex-wrap-reverse': { flexWrap: 'wrap-reverse !important' as 'wrap-reverse' },
	'.justify-content-start': { justifyContent: 'flex-start !important' },
	'.justify-content-end': { justifyContent: 'flex-end !important' },
	'.justify-content-center': { justifyContent: 'center !important' },
	'.justify-content-between': { justifyContent: 'space-between !important' },
	'.justify-content-around': { justifyContent: 'space-around !important' },
	'.justify-content-evenly': { justifyContent: 'space-evenly !important' },
	'.align-items-start': { alignItems: 'flex-start !important' },
	'.align-items-end': { alignItems: 'flex-end !important' },
	'.align-items-center': { alignItems: 'center !important' },
	'.align-items-baseline': { alignItems: 'baseline !important' },
	'.align-items-stretch': { alignItems: 'stretch !important' },
	'.align-content-start': { alignContent: 'flex-start !important' },
	'.align-content-end': { alignContent: 'flex-end !important' },
	'.align-content-center': { alignContent: 'center !important' },
	'.align-content-between': { alignContent: 'space-between !important' },
	'.align-content-around': { alignContent: 'space-around !important' },
	'.align-content-stretch': { alignContent: 'stretch !important' },
	'.align-self-auto': { alignSelf: 'auto !important' },
	'.align-self-start': { alignSelf: 'flex-start !important' },
	'.align-self-end': { alignSelf: 'flex-end !important' },
	'.align-self-center': { alignSelf: 'center !important' },
	'.align-self-baseline': { alignSelf: 'baseline !important' },
	'.align-self-stretch': { alignSelf: 'stretch !important' },
	'.order-first': { order: '-1 !important' },
	'.order-0': { order: '0 !important' },
	'.order-1': { order: '1 !important' },
	'.order-2': { order: '2 !important' },
	'.order-3': { order: '3 !important' },
	'.order-4': { order: '4 !important' },
	'.order-5': { order: '5 !important' },
	'.order-last': { order: '6 !important' },
	'.m-auto': { margin: 'auto !important' },
	'.mx-0': { marginLeft: '0 !important', marginRight: '0 !important' },
	'.mx-auto': { marginLeft: 'auto !important', marginRight: 'auto !important' },
	'.my-0': { marginTop: '0 !important', marginBottom: '0 !important' },
	'.my-auto': { marginTop: 'auto !important', marginBottom: 'auto !important' },
	'.mt-0': { marginTop: '0 !important' },
	'.mt-auto': { marginTop: 'auto !important' },
	'.me-0': { marginLeft: '0 !important' },
	'.me-auto': { marginLeft: 'auto !important' },
	'.mb-0': { marginBottom: '0 !important' },
	'.mb-auto': { marginBottom: 'auto !important' },
	'.ms-0': { marginRight: '0 !important' },
	'.ms-auto': { marginRight: 'auto !important' },
	'.p-0': { padding: '0 !important' },
	'.px-0': { paddingLeft: '0 !important', paddingRight: '0 !important' },
	'.py-0': { paddingTop: '0 !important', paddingBottom: '0 !important' },
	'.pt-0': { paddingTop: '0 !important' },
	'.pe-0': { paddingLeft: '0 !important' },
	'.pb-0': { paddingBottom: '0 !important' },
	'.ps-0': { paddingRight: '0 !important' },
	'.text-start': { textAlign: 'right !important' as 'right' },
	'.text-end': { textAlign: 'left !important' as 'left' },
	'.text-center': { textAlign: 'center !important' as 'center' },
	'.text-decoration-none': { textDecoration: 'none !important' },
	'.text-decoration-underline': { textDecoration: 'underline !important' },
	'.text-lowercase': { textTransform: 'lowercase !important' as 'lowercase' },
	'.text-uppercase': { textTransform: 'uppercase !important' as 'uppercase' },
	'.text-capitalize': { textTransform: 'capitalize !important' as 'capitalize' },
	'.text-wrap': { whiteSpace: 'normal !important' as 'normal' },
	'.text-nowrap': { whiteSpace: 'nowrap !important' as 'nowrap' },
	'.bg-transparent': { backgroundColor: 'transparent !important' as 'transparent' },
	'.user-select-all': {
		WebkitUserSelect: 'all !important' as 'all',
		MozUserSelect: 'all !important' as 'all',
		userSelect: 'all !important' as 'all',
	},
	'.user-select-auto': {
		WebkitUserSelect: 'auto !important' as 'auto',
		MozUserSelect: 'auto !important' as 'auto',
		userSelect: 'auto !important' as 'auto',
	},
	'.user-select-none': {
		WebkitUserSelect: 'none !important' as 'none',
		MozUserSelect: 'none !important' as 'none',
		userSelect: 'none !important' as 'none',
	},
	'.pe-none': { pointerEvents: 'none !important' as 'none' },
	'.pe-auto': { pointerEvents: 'auto !important' as 'auto' },
	'.rounded-0': { borderRadius: '0 !important' },
	'.rounded-circle': { borderRadius: '50% !important' },
	'.rounded-pill': { borderRadius: '50rem !important' },
	'.visible': { visibility: 'visible !important' as 'visible' },
	'.invisible': { visibility: 'hidden !important' as 'hidden' },
};

/**
 * @description
 * My global css classes
 */
const globalClass = (theme: MantineTheme): CSSObject => {
	return {
		...importantBsClases,

		/**
		 * My Global classes
		 */
		'.ltr': {
			direction: 'ltr !important' as 'ltr',
		},

		'.rtl': {
			direction: 'rtl !important' as 'rtl',
		},

		'.vazir-font': {
			fontFamily: `Vazirmatn, Arial, Tahoma, 'Times New Roman', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important`,
		},
	};
};

export default globalClass;
