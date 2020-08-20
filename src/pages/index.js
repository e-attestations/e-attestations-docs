import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    key: 1,
    title: <>Easy to implement</>,
    imageUrl: 'img/200px-Cloud-API-Logo.svg.png',
    description: (
      <>
        e-Attestation APIs are very easy to use and to implement in the
        programming language of your choice. You should use OpenAPIv3
        documentation as a standard and gives you various capabilities for
        generating your client side code.
      </>
    ),
  },
  {
    key: 2,
    title: <>Powered by OpenAPI v3</>,
    imageUrl: 'img/openapi-whats-new.png',
    description: (
      <>
        Using OpenAPI V3 standard, e-Attestations API are very easy to discover,
        test and code with. Our imersive documentation provides in depth
        discovery over JSON response and requests.
      </>
    ),
  },
  {
    key: 3,
    title: <>Use the power of Postman</>,
    imageUrl: 'img/postman-logo.png',
    description: (
      <>
        You can go even quicker with the Postman collection we provide you.
        Install postman, complete Postman variables with your credentials and
        you can test the API right away without writing a single line of code.
      </>
    ),
  },
];

const documentations = [
  {
    key: 1,
    title: <>e-Attestation API 'EDGE'</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        This is the most avanced and activaly tested version of our RESTful API.
        With this version you@apos;ll find more features and more data. API
        'EDGE' adopt an ever greening version strategy so you'll benefits
        enhancements automagicaly. You have to flavours :
        <ul>
          <li>
            <a target="_blank" href="openapi/swagger.html">
              OpenAPI v3
            </a>
          </li>
          <li>
            <a target="_blank" href="openapi/redoc.html">
              Redoc format
            </a>
          </li>
        </ul>
      </>
    ),
  },

  {
    key: 2,
    title: <>API REST 1.1 (fr)</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        This is our actual version of our REST API. It will be replaced soon by
        the 'EDGE' version. Stay tuned and jump the 'EDGE' version now !
        <ul>
          <li>
            <a target="_blank" href="EAttestationsRESTAPIv1.1/index.html">
              Documentation of e-Attestations REST API v1.1 (fr)
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 3,
    title: <>API SOAP v3 (fr)</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        This API is still maintained for our customers forced to use SOAP, but
        we recommend choosing our REST API.
        <a target="_blank" href="EAttestationsWSAPI/index.html">
          <ul>
            <li>Documentation of e-Attestations SOAP API v3 (fr)</li>
          </ul>
        </a>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
      title={`Welcome to ${siteConfig.title}`}
      description="e-Attestations.io for all technical resources you need when you develop with our APIs">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                styles.getstarted,
                'getstarted button button--outline button--secondary button--lg',
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
            <img src="img/logo-e-Attestations-tech.png" alt="welcome" />
            <p>
              You're a developer and you want to find more information, tools,
              SDK, samples codes for you project ?
              <br />
              &nbsp;<b>You're in the good place !</b>
            </p>
            <p>
              e-Attestations offers the best documentations, tools, tips and
              tricks for you e-Attestations API integration project.
            </p>
          </div>
        </section>
      </main>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({key, title, imageUrl, description}) => (
                  <Feature
                    key={key}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <header className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Featured documentations</h1>
          <p className="hero__subtitle">
            Documentations of our APIs in different falvours
          </p>
        </div>
      </header>

      <main>
        {documentations && documentations.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {documentations.map(({key, title, imageUrl, description}) => (
                  <Feature
                    key={key}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
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
