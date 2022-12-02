import { AppShell, Navbar, Aside, Footer } from '@mantine/core';
import { ReactNode } from 'react';
import { Header } from '~sections/index';

interface IGlobalLayout {
	children: ReactNode;
}

/**
 * @description
 * لای‌اوت اصلی وبسایت
 */
const GlobalLayout = ({ children }: IGlobalLayout) => {
	return <AppShell header={<Header />}>{children}</AppShell>;
};

export default GlobalLayout;
