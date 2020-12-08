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
        e-Attestations`&apos;` APIs are very easy to use and to implement in the
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
    title: <>e-Attestations 'EDGE' API</>,
    imageUrl: 'img/logo-e-Attestations.png',
    description: (
      <>
        <h3>The ever-geening API</h3>
        <p>
          This is the most advanced and actively tested version of our RESTful
          API. With this version you will find more features and more data.{' '}
        </p>
        <p>
          e-Attestations 'EDGE' adopts an ever-greening strategy so you will benefit
          enhancements automagicaly.
        </p>
        You have now three flavours for the documentation:
        <ul>
        <li>
          <a target="_blank" href="https://documenter.getpostman.com/view/3000526/TVKD3xcz">
            Postman Documentation
          </a>
        </li>
        <li>
            <a target="_blank" href="openapi/swagger.html">
              OpenAPI v3 specs
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
        This is our first REST API.
        <br />
        It will be replaced soon by the 'EDGE' version.
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
        This API is still maintained for our customers forced to use SOAP.
        <p>We recommend choosing our REST API.</p>
        <a target="_blank" href="EAttestationsWSAPI/index.html">
          <ul>
            <li>Documentation of e-Attestations SOAP API v3 (fr)</li>
          </ul>
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
            href="https://documenter.getpostman.com/view/3000526/TVKD3xcz">
            Postman documentation
          </a>{' '} and discover all the diveristy of 'EDGE' API with our <a target="_blank" href="https://documenter.getpostman.com/view/3000526/TVKD3xcz">
          Postman requests collection</a>.
        </p>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
          )}
          to="https://documenter.getpostman.com/view/3000526/TVKD3xcz">
          Postman Documentations
        </Link>
          <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
          )}
          to="https://documenter.getpostman.com/view/3000526/TVKD3xcz">
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
              to={useBaseUrl('docs/a-1-introduction')}>
              Get Started
            </Link>

          </div>
        </div>
      </header>

      <main>
        <div className={clsx('hero shadow--lw')}>
          <div className="container">
            <img src="img/logo-e-Attestations-tech.png" alt="welcome" />

              <h1 className="text--center"><span role="img">🚀</span></h1>
              <div className="hero__subtitle">
              <p>
                You are a developer and you want to find information,
                documentations, tools, CLI (soon), samples codes and so on...
                for your e-attestations data integration project ?                
              </p>
              <p className="text--center">
                You're at the good place !
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

      <header className={clsx('hero shadow--md', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Build with the community !</h1>
          <p className="hero__subtitle">
            "L'Atelier" by e-Attestations provides you with docs, tools, code samples, tips and tricks on
            its GitHub organization. Don't forget to <i>Watch</i> our open-source repositories and joins us !
          </p>
        </div>
      </header>

      <main style={{margin: "4rem" }}>
        {channels && channels.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {channels.map(({key, title, imageUrl, description}) => (
                  <Feature
                    gridSize="col--6"
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
