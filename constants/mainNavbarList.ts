export interface INavbarList {
	href: string;
	label: string;
	children?: { href: string; label: string }[];
}

/**
 * @description
 * لیست منوهای ناوبری (صفحات سایت)
 */
const mainNavbarList: INavbarList[] = [
	{
		href: '/',
		label: 'صفحه اصلی',
	},
	{
		href: '/services',
		label: 'خدمات',
	},
	{
		href: '/about',
		label: 'درباره ما',
	},
	{
		href: '/#sections',
		label: 'سایر بخش‌ها',
		children: [
			{
				href: '/#skils',
				label: 'مهارت‌ها',
			},
		],
	},
	{
		href: '/blog',
		label: 'بلاگ',
	},
	{
		href: '/contact',
		label: 'تماس با ما',
	},
];

export default mainNavbarList;
