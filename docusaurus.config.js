/* eslint-disable header/header */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'e-Attestations APIs',
  tagline: 'All technical resources you need for your e-Attestations data integration projects, and more !',
  url: 'https://e-attestations.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'e-attestations', // Usually your GitHub org/user name.
  projectName: 'e-attestations-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'e-Attestations',
        src: 'img/cropped-logo-eattestations-2.png',
      },
      items: [
        {
          to: 'docs/a-1-introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://e-attestations.io/openapi/swagger.html',
          label: 'EDGE',
          position: 'left',
        },
        {
          href: 'https://e-attestations.io/EAttestationsRESTAPIv1.1/index.html',
          label: 'REST 1.1 (fr)',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://e-attestations.io/EAttestationsWSAPI/index.html',
          label: 'SOAP (fr)',
          position: 'left',
        },
        {
          href: 'https://github.com/e-attestations',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discordapp.com/channels/656160917591162903',
          label: 'Discord',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentations',
          items: [
            {
              label: 'Introduction',
              to: 'docs/a-1-introduction',
            },
            {
              label: 'Get started',
              to: 'docs/b-1-get-started',
            },
            {
              label: 'API EDGE Reference',
              to: 'docs/c-1-account',
            },
            {
              label: 'Lists and codes',
              to: 'docs/d-2-error-codes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/e-attestations',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/channels/656160917591162903',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'e-Attestations',
        src: 'https://www.e-attestations.com/images/logo-eattestations.png',
        href: 'https://www.e-attestations.com',
      },
      copyright: `Developed with ❤️ by l'Atelier with Docusaurus - e-Attestations ${new Date().getFullYear()}`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(41, 127, 185)',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/e-attestations/e-attestations-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} e-Attestations.com.`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/e-attestations/e-attestations-docs/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
