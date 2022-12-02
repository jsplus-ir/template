/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	generateEtags: false,
	poweredByHeader: false,
	distDir: '.build',
	images: {
		deviceSizes: [476, 668, 892, 1200],
	},
};

module.exports = nextConfig;
