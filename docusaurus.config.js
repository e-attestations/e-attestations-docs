/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'e-Attestations',
  tagline: 'Technical resources for your project',
  url: 'https://e-attestations.io',
  baseUrl: '/',
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
      links: [
        {to: 'docs/doc2', label: 'QuickStart', position: 'left'},
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/e-attestations',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
