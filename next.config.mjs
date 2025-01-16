/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'assets.aceternity.com',
				port: '',
				pathname: '**',
			},
		],
		domains: ['images.unsplash.com', 'assets.aceternity.com'],
		unoptimized: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|jpeg|webp)$/i,
			type: 'asset/resource',
		});
		return config;
	},
};

export default nextConfig;
