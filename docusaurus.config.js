const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Sushiswap Docs',
	tagline: 'Documentation & Important Links',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'ignore',
	favicon: 'img/favicon.ico',
	organizationName: 'Sushiswap',
	projectName: 'sushi-docs',

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Sushiswap Docs',
				logo: {
					alt: 'Sushiswap Logo',
					src: 'img/sushilogo.png',
				},
				items: [
					// {
					// 	type: 'docsVersionDropdown',
					// 	docsPluginId: 'default',
					// 	position: 'left',
					// 	dropdownActiveClassDisabled: true,
					// 	className: 'persistent',
					// },
					{
						to: '/docs/Developers/Overview',
						label: 'Contracts',
						position: 'left',
					},
					{
						to: '/sdk/introduction',
						label: 'SDK',
						position: 'left',
					},
					{
						to: '/docs/Developers/API/Overview',
						label: 'Subgraph (API)',
						position: 'left',
					},
					{
						to: '/docs/Governance/Current%20Governance%20Model',
						label: 'Governance',
						position: 'left',
					},
					{
						to: '/docs/Ecosystem/Overview',
						label: 'Ecosystem',
						position: 'left',
					},
					{
						to: 'https://sushiswap.com/whitepaper',
						label: 'Whitepaper',
						position: 'right',
						className: 'persistent',
					},
					{
						to: '/docs/FAQ',
						label: 'FAQ',
						position: 'right',
						className: 'persistent',
					},
					{
						href: 'https://github.com/sushiswap',
						label: 'Github',
						position: 'right',
						className: 'persistent',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Github',
						items: [
							{
								label: 'sushiswap-contracts',
								href: 'https://github.com/sushiswap/sushiswap',
							},
							{
								label: 'sushiswap-interface',
								href: 'https://github.com/sushiswap/interface',
							},
							{
								label: 'sushiswap-sdk',
								href: 'https://github.com/sushiswap/sdk',
							},
							{
								label: 'Deployment Addresses',
								href: 'https://boringcrypto.github.io/DAOView/#/chefs',
							},
						],
					},
					{
						title: 'Ecosystem',
						items: [
							{
								label: 'Home',
								href: 'https://www.sushi.com/',
							},
							{
								label: 'App',
								href: 'https://app.sushi.com/en/swap',
							},
							{
								label: 'Analytics',
								href: 'https://app.sushi.com/analytics/1/dashboard',
							},
							{
								label: 'Token Lists',
								href: 'https://app.sushi.com/analytics/1/tokens',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Governance',
								href: 'https://forum.sushi.com/',
							},
							{
								label: 'Discord',
								href: 'https://discord.com/invite/NVPXN4e',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/sushiswap',
							},
							{
								label: 'Blog',
								href: 'https://medium.com/sushiswap-org',
							},
						],
					},
				],
			},
			prism: {
				defaultMode: darkCodeTheme,
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
		}),
};

module.exports = config;
