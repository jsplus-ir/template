import { NavLink } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import type { INavbarList } from '~constants/mainNavbarList';

export const NavbarItem = ({ href, label, children }: INavbarList) => {
	const [isChildOpen, setIsChildOpen] = useState<boolean>(false);
	const ref = useClickOutside(() => setIsChildOpen(false));

	return (
		<>
			{!children || children.length === 0 ? (
				<Link href={href} passHref>
					<NavLink component="a" label={label} />
				</Link>
			) : (
				<NavLink
					label={label}
					className="has-children"
					disableRightSectionRotation
					onChange={(opened) => setIsChildOpen(opened)}
					opened={isChildOpen}
					ref={ref}
					rightSection={<FaAngleDown />}
				>
					{children.map((childItem, index) => {
						return (
							<Link href={childItem.href} passHref key={index}>
								<NavLink component="a" label={childItem.label} />
							</Link>
						);
					})}
				</NavLink>
			)}
		</>
	);
};
