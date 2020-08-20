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
  onBrokenLinks: 'throw',
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
          href: 'https://e-attestations.io/openapi/swagger.html',
          label: 'API EDGE (REST)',
          position: 'left',
        },
        {
          href: 'https://e-attestations.io/openapi/redoc.html',
          label: 'Redoc',
          position: 'left',
        },
        {
          href: 'https://e-attestations.io/EAttestationsRESTAPIv1.1/index.html',
          label: 'API REST 1.1 (fr)',
          position: 'left',
        },
        {
          href: 'https://e-attestations.io/EAttestationsWSAPI/index.html',
          label: 'API WS (fr)',
          position: 'left',
        },
        {to: 'docs/b-1-get-started', label: 'QuickStart', position: 'right'},
        {
          to: 'docs/a-1-introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/e-attestations',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
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
              label: 'Tutorials',
              to: 'docs/t-1-create-dossier',
            },
            {
              label: 'API Reference',
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
              label: 'Discord',
              href: 'https://discordapp.com/channels/656160917591162903',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://api.test-e-attestations.com',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/Introduction/a-1-introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/e-attestations/e-attestations-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
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
