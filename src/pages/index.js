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
        e-Attestations' APIs are very easy to use and to implement in the
        programming language of your choice.
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
        You can go even faster with the Postman collection we provide you.
        Install postman, complete Postman variables with your credentials and
        you can test the API right away without writing a single line of code.
      </>
    ),
  },
];

const documentations = [
  {
    key: 1,
    title: <>e-Attestations 'EDGE' API</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        <p>
          This is the most advanced and actively tested version of our RESTful
          API. With this version you will find more features and more data.{' '}
        </p>
        <p>
          e-Attestations 'EDGE' adopts an ever-greening strategy so you will benefit
          enhancements automagicaly.
        </p>
          <a target="_blank" href="https://edge.e-attestations.io">
            Postman Documentation
          </a>
      </>
    ),
  },

  {
    key: 2,
    title: <>API REST 1.1 (fr)</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        This is our first REST API.
        <br />
        It will be replaced soon by the 'EDGE' version.
        <br/><br/>
          <a target="_blank" href="EAttestationsRESTAPIv1.1/index.html">
            Documentation of e-Attestations REST API v1.1 (fr)
          </a>
      </>
    ),
  },
  {
    key: 3,
    title: <>API SOAP v3 (fr)</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        This API is still maintained for our customers forced to use SOAP.
        <p>We recommend choosing our REST API.</p>
        <a target="_blank" href="EAttestationsWSAPI/index.html">
            Documentation of e-Attestations SOAP API v3 (fr)
        </a>
      </>
    ),
  },
];

const channels = [
  {
    key: 1,
    title: null,
    imageUrl: 'img/iconfinder_Github_1298743.png',
    description: (
      <div className="container text--center">
        <p className="hero__subtitle">Find more resources, SDK, CLI and mode <br/>in our GitHub organization</p>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
          )}
          to="https://github.com/e-attestations">
          Visit GitHub
        </Link>
      </div>
    ),
  },
  {
    key: 2,
    title: null,
    imageUrl: 'img/postman-logo.png',
    description: (
      <div className="container text--center">
        <p className="hero__subtitle">
          Find more with our{' '}
          <a
            target="_blank"
            href="https://edge.e-attestations.io">
            Postman documentation
          </a>{' '} and discover all the diveristy of 'EDGE' API with our <a target="_blank" href="https://edge.e-attestations.io">
          Postman requests collection</a>.
        </p>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
          )}
          to="https://edge.e-attestations.io">
          Postman Documentations
        </Link>
          <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
          )}
          to="https://edge.e-attestations.io">
          Postman Requests Collection
        </Link>
      </div>
    ),
  },
];

function Feature({imageUrl, title, description, gridSize}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(`col ${gridSize || 'col--4'}`, styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <p className="hero__subtitle text--center">{title}</p>
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
      <header className={clsx('hero hero--primary shadow--lw', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                styles.getstarted,
                'getstarted button button--outline button--secondary button--lg',
              )}
              to={useBaseUrl('https://edge.e-attestations.io')}>
              Get Started
            </Link>

          </div>
        </div>
      </header>

      <main>
        <div className={clsx('hero shadow--lw')}>
          <div className="container">
            <img src="img/dev_ea.svg" alt="welcome" />

              <h1 className="text--center"><span role="img">🚀</span></h1>
              <div className="hero__subtitle">
              <p>
                You are a developer and you want to find information,
                documentations, tools, samples codes and so on...
                for your e-attestations data integration project ?                
              </p>
              <p className="text--center">
                You're at the right place !
              </p>
              </div>
          </div>
        </div>
      </main>

      <main style={{margin: "4rem" }}>
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
            Documentations of our APIs in different flavours
          </p>
        </div>
      </header>

      <main style={{margin: "4rem" }}>
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
