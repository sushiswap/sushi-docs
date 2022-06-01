const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SushiSwap',
  tagline: 'Documentation Portal',
  url: 'https://docs.sushi.com/',
  baseUrl: '/', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sushiswap',
  projectName: 'sushi-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sushiswap/sushi-docs/edit/master',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SushiSwap',
        logo: {
          alt: 'Sushiswap Logo',
          src: 'img/sushilogo.png',
        },
        items: [
          {
            to: '/docs/Developers/Overview',
            label: 'Contracts',
            position: 'left',
          },
          {
            to: '/docs/Developers/Subgraphs/Overview',
            label: 'Subgraphs',
            position: 'left',
          },
          {
            to: '/docs/Developers/Packages/Overview',
            label: 'Packages',
            position: 'left',
          },
          {
            to: '/docs/Governance/Current%20Governance%20Model',
            label: 'Governance',
            position: 'left',
          },
          {
            to: '/docs/Ecosystem/Build%20on%20Sushiswap',
            label: 'Ecosystem',
            position: 'left',
          },
          {
            to: '/docs/FAQ/General%20FAQ',
            label: 'FAQ',
            position: 'right',
          },
          {
            href: 'https://github.com/sushiswap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: 'sushiswap-contracts',
                href: 'https://github.com/sushiswap',
              },
              {
                label: 'sushiswap-interface',
                href: 'https://github.com/sushiswap/sushiswap-interface',
              },
              {
                label: 'sushiswap-sdk',
                href: 'https://github.com/sushiswap/sdk',
              },
              {
                label: 'Deployment Addresses',
                to: '/docs/Developers/Deployment%20Addresses',
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
                href: 'https://app.sushi.com/analytics?chainId=1',
              },
              {
                label: 'Token Lists',
                href: 'https://app.sushi.com/analytics/tokens?chainId=1',
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
        defaultMode: 'darkCodeTheme',
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
