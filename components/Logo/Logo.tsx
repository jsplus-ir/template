import { Title, Flex, Text } from '@mantine/core';

const Logo = () => {
	return (
		<Flex
			align="center"
			justify="end"
			className="user-select-none pe-none"
			sx={(theme) => ({
				'paddingBottom': '5px',
				'height': '45px',

				'.logo-text': {
					fontSize: '22px',
					lineHeight: 1.9,
				},

				'.logo-indicator': {
					width: '6px',
					height: '6px',
					backgroundColor: '#FF4A57',
					margin: '13px 4px 0',
				},
			})}
		>
			<Title order={1} className="logo-text fw-bold m-0" title="جاوااسکریپت پلاس">
				جی‌اس پلاس
			</Title>
			<span className="logo-indicator rounded-circle"></span>
			<Text className="logo-text fw-bold">آی‌آر</Text>
		</Flex>
	);
};

export default Logo;
