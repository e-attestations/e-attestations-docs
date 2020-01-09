/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
//import Cube from '../components/Cube';

const features = [
  {
    title: <>Easy to implement</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        API e-Attestation are very easy to use and to implement in the programming language of your choice.
        Using OpenAPI v3 API contrat format give you the capability of generate your client side code faster.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        e-Attestations resources are presented clearly and we offer standard implementation scenarios.
        You develop faster on what matters quickly.
      </>
    ),
  },
  {
    title: <>Powered by OpenAPI v3</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Using OpenAPI V3 standard, e-Attestations API are very easy to discover, test and code with.
        Our imersive documentation provides in depth discovery over JSON response and requests.        
      </>
    ),
  },
  {
    title: <>Use the power of Postman by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You go even quicker with the Postman collection we provide. 
        Install postman, complete variables with your credentials and you can test the API right away without writing a single line of code.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--5', styles.feature, styles.bloc)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/a-1-introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <h1>Welcome to our technical resources center</h1>
              <p>
                You're a developer and you want to find more information, tools, SDK, samples codes for you project ?
                You're at the good place.
              </p>
              <p>
                This project aims to offer the best documnetations, tools, tips and tricks for you e-Attestations API integration project.
              </p>
            </div>
          </div>
        </section>
            
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
