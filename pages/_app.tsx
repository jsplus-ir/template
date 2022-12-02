import Head from 'next/head';

import type { AppProps } from 'next/app';
import { Box, Global, MantineProvider } from '@mantine/core';
import { GlobalStyles, ThemeOptions, rtlCache } from '~theme/index';
import GlobalLayout from '~layout/GlobalLayout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* Character encoding */}
				<meta charSet="utf-8" />

				{/* Viewport for responsive web design */}
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

				{/* Document Title */}
				<title>JSPlus Template</title>

				{/* Meta Description  */}
				<meta
					name="description"
					content="This is another blog template generated using reactjs, nextjs, mantine, and other technologies"
				/>

				{/* Favicon  */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#a38d00" />
				<meta name="apple-mobile-web-app-title" content="JSPlus-IR" />
				<meta name="application-name" content="JSPlus-IR" />
				<meta name="msapplication-TileColor" content="#ffc40d" />

				{/* Theme color */}
				<meta name="theme-color" content="#1f2235" />
			</Head>

			<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS emotionCache={rtlCache} theme={ThemeOptions}>
				<Global styles={GlobalStyles} />

				<noscript>
					<Box
						className="position-sticky top-0 text-center vw-100"
						p={10}
						sx={(theme) => ({
							backgroundColor: theme.colors.danger[6],
							zIndex: 2000,
							boxShadow: '0 0px 20px 1px #00000096',
						})}
					>
						متوجه شدیم که جاوااسکریپت در مرورگر شما غیرفعال می‌باشد. جهت استفاده بهتر از این وبسایت، لطفا جاوااسکریپت را فعال نمایید.
					</Box>
				</noscript>

				<GlobalLayout>
					<Component {...pageProps} />
				</GlobalLayout>
			</MantineProvider>
		</>
	);
}
