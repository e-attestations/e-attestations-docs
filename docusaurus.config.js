/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'e-Attestations REST APIs',
  tagline: 'Technical resources for your projects',
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
        {to: '/openapi/swagger.html', label: 'API EDGE (REST)', position: 'left'},
        {to: '/openapi/redoc.html', label: 'Redoc', position: 'left'},
        {to: '/EAttestationsRESTAPIv1.1/index.html', label: 'API REST 1.1 (fr)', position: 'left'},
        {to: '/EAttestationsWSAPI/index.html', label: 'API WS (fr)', position: 'left'},
        {to: 'docs/b-1-get-started', label: 'QuickStart', position: 'right'},
        {to: 'docs/a-1-introduction', activeBasePath: 'docs', label: 'Docs', position: 'right'},
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
              href: 'https://api.dev-e-attestations.com'
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
