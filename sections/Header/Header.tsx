import { Grid, Header as MantineHeader } from '@mantine/core';
import { Container } from '@mantine/core';
import { MainNavbar, Logo } from '~components/index';

const Header = () => {
	return (
		<MantineHeader
			height={90}
			sx={(theme) => ({
				backgroundColor: '#1f2235',
				borderBottom: 'none',
			})}
		>
			<Container size={'xl'} className="h-100">
				<Grid align={'center'} className="h-100">
					<Grid.Col span={12} xl={9}>
						<MainNavbar />
					</Grid.Col>
					<Grid.Col span={12} xl={3}>
						<Logo />
					</Grid.Col>
				</Grid>
			</Container>
		</MantineHeader>
	);
};

export default Header;
