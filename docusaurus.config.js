// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inco 中文文档',
  tagline: '使用 Inco 构建隐私保护的智能合约应用',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://inco-chinese-docs.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jask', // Usually your GitHub org/user name.
  projectName: 'inco-chinese-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/respectevery01/inco-chinese-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Inco 中文文档',
        logo: {
          alt: 'Inco Red Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '快速入门',
            to: '/docs/quickstart',
          },
          {to: '/docs/Solidity/intro', label: 'Solidity', position: 'left'},
          {to: '/docs/js-sdk/overview', label: 'JS SDK', position: 'left'},
          {
            href: 'https://github.com/respectevery01/inco-chinese-docs',
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
                label: '快速入门',
                to: '/docs/quickstart',
              },
              {
                label: 'Solidity',
                to: '/docs/Solidity/intro',
              },
              {
                label: 'JS SDK',
                to: '/docs/js-sdk/overview',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/inco',
              },
              {
                label: 'X',
                href: 'https://x.com/inconetwork',
              },
              {
                label: '中文博客',
                href: 'https://onchaindiary.substack.com/t/inco',
              },
            ],
          },
          {
            title: '官方链接',
            items: [
              {
                label: 'Inco 官网',
                href: 'https://www.inco.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Inco-fhevm',
              },
              {
                label: '官方文档',
                href: 'https://docs.inco.org/home',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inco 中文文档. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
