import { Box } from '@mantine/core';
import { mainNavbarList } from '~constants/index';
import { NavbarItem } from './NavbarItem';

/**
 * @description
 * منوی ناوبری اصلی در هدر صفحه
 */
const MainNavbar = () => {
	return (
		<Box
			component="nav"
			sx={(theme) => ({
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				gap: '0.75rem',
			})}
		>
			{mainNavbarList.map((item, index) => {
				const { href, label, children } = item;

				return (
					<Box
						key={index}
						sx={(theme) => ({
							'position': 'relative',

							'.mantine-rtl-NavLink-root': {
								'color': '#fff',
								'fontSize': '18px',
								'padding': '8px 12px',
								'fontWeight': 600,
								'transition': 'color 0.2s ease',

								'&:hover, &[data-expanded="true"]': {
									willChange: 'color',
									backgroundColor: 'transparent',
									color: '#ff4a57',
								},

								'&:not(.has-children) + div': {
									display: 'none !important',
								},

								'&.has-children + div': {
									position: 'absolute',
									borderRadius: '6px',
									marginTop: '10px',
									marginLeft: '-10px',
								},
							},

							'.mantine-rtl-NavLink-rightSection': {
								overflow: 'hidden',

								svg: {
									transform: 'translateY(-1px)',
									width: '0.85em',
									height: '0.85em',
								},
							},

							'.mantine-rtl-NavLink-children': {
								'borderRadius': '6px',
								'overflow': 'hidden',
								'backgroundColor': '#23263A',
								'border': '1px solid rgba(0,0,0,.15)',

								'padding': '8px 0',

								'.mantine-rtl-NavLink-root': {
									'minWidth': '170px',
									'paddingRight': '15px',
									'paddingLeft': '15px',
									'transition': 'color 0.2s ease, background-color 0.4s ease',

									'&:hover': {
										willChange: 'color, background-color',
										backgroundColor: '#ff4a57',
										color: '#fff',
									},
								},
							},
						})}
					>
						<NavbarItem href={href} label={label} children={children} />
					</Box>
				);
			})}
		</Box>
	);
};

export default MainNavbar;
