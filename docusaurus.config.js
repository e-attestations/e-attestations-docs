/* eslint-disable header/header */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'e-Attestations API',
  tagline: 'All technical resources you need for your e-Attestations data integration projects with API Edge',
  url: 'https://e-attestations.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'e-attestations', // Usually your GitHub org/user name.
  projectName: 'e-attestations-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
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
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://edge.e-attestations.io',
          label: 'EDGE doc (Postman)',
          position: 'left',
        },
        {
          href: './EAttestationsWSAPI/index.html',
          label: 'SOAP API doc',
          position: 'left',
        },
        {
          href: './EAttestationsRESTAPIv1.1/index.html',
          label: 'REST API doc (deprecated)',
          position: 'left',
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
              label: 'Lists and codes',
              to: 'docs/d-2-error-codes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Postman',
              href: 'https://edge.e-attestations.io',
            },
          ],
        },
        {
          title: 'Follow us',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/eattestations',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/e-attestations-certicorps-/?originalSubdomain=fr',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCuoU6l_DHIGS67UdFmk_WEQ',
            },
          ],
        },
      ],
      logo: {
        alt: 'e-Attestations',
        src: 'https://www.e-attestations.com/images/2019/01/20/logo_footer.png',
        href: 'https://www.e-attestations.com',
      },
      copyright: `Developed by l'Atelier with Docusaurus - e-Attestations ${new Date().getFullYear()} <br/>
      <div style="font-size:10px">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
