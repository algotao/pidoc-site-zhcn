// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raspberry Pi 树莓派 (官网25年10月更新)',
  tagline: '中文版文档',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://pidoc.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'algotao', // Usually your GitHub org/user name.
  projectName: 'pidoc-site-zhcn', // Usually your repo name.

  //onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  scripts: [
    { src: '/js-sdk-pro.min.js', async: false },
    { src: '/js/51la.js', async: false }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { sidebarPath: './sidebars.js', showLastUpdateTime: true },
        blog: { showReadingTime: true },
        pages: { exclude: ['/imager/**', '**/dl/**'] },
        theme: { customCss: './src/css/custom.css' },
        sitemap: { lastmod: 'date', ignorePatterns: ['/blog/**'] },
        //gtag: { trackingID: 'G-CYBRYL8W2Y', anonymizeIP: false },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gpiozero',
        path: 'gpiozero',
        routeBasePath: 'gpiozero',
        sidebarPath: './sidebars.js',
        showLastUpdateTime: true
        // ... other options
      },
    ],
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/favicon.png',
      navbar: {
        title: '树莓派文档',
        logo: {
          alt: '树莓派文档',
          src: 'img/pi.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/downloads/', label: '软件下载', position: 'left' },
          { to: '/gpiozero/', label: 'GPIO Zero', position: 'left' },
          { to: '/docs/pidoc/install_monitor/', label: 'PiDoc工具', position: 'left' },
          { to: '/blog/', label: '日志', position: 'left' },
          {
            href: 'https://github.com/algotao/pidoc-site-zhcn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '入门',
                to: '/docs/computers/getting-started',
              },
              {
                label: '树莓派硬件',
                to: '/docs/computers/raspberry-pi',
              }
            ],
          },
          {
            title: '关联',
            items: [
              {
                label: '树莓派官方文档(英文版)',
                href: 'https://www.raspberrypi.com/documentation/',
              },
              {
                label: 'GPIO Zero 文档(英文版)',
                href: 'https://gpiozero.readthedocs.io/en/latest/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '日志',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/algotao/pidoc-site-zhcn',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} pidoc.cn，中译版在 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 创作共用协议</a> 下发布，英文版由 <a href="https://www.raspberrypi.com/documentation/">Raspberry Pi Ltd</a> 版权所有 <br /> <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2021035926号-2</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['protobuf', 'http', 'bash', 'cmake', 'ini', 'php', 'python', 'csharp', 'cpp', 'json', 'kotlin'],
      },
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: 'pidoc',
        typesenseServerConfig: {
          nodes: [
            {
              host: 'ca.algo.com.cn',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'wlJD7HhRRcMzJFuacoO4bh3VVnyljsgU',
        },
        typesenseSearchParameters: {},
        contextualSearch: true,
      },
      metadata: [
        { name: 'shenma-site-verification', content: '124a8035166290a4e81d78c346cfff1e_1712642854' },
      ],
    }),
};

export default config;
