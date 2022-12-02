import { Title } from '@mantine/core';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>صفحه اصلی</title>
				<meta name="description" content="توضیحات صفحه اصلی" />
			</Head>

			<main>
				<Title order={1} p={15} className="text-center">
					سلام دنیا
				</Title>
			</main>
		</>
	);
}
