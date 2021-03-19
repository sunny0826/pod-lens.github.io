import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '../theme/CodeBlock'
import Asciinema from '../components/Asciinema'
import features from '../data/features'
import demo from '../data/demo'
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', styles.feature, reverse ? styles.featureReverse : '')}>
      <div className="col col--6">
        <div className="text--center">
          {imgUrl && <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />}
        </div>
      </div>
      <div className={clsx('col col--6', styles.featureDesc)}>
        <div>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}

function Demo({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', styles.feature, reverse ? styles.featureReverse : '')}>
      <div className="col col--6">
        <div className="text--center">
          {imgUrl && <img className={styles.demoImage} src={useBaseUrl(imgUrl)} alt={title} />}
        </div>
      </div>
      <div className={clsx('col col--6', styles.featureDesc)}>
        <div>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>

      <header className={clsx('hero', styles.hero)}>
        <div className="container text--center">
          <div className={styles.heroLogoWrapper}>
            <img className={styles.heroLogo} src={useBaseUrl('img/logo.svg')} alt="Pod Lens Logo" />
          </div>
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className="hero__subtitle"><Translate>Show pod related resources</Translate></p>
        </div>
      </header>

      <div className={clsx('hero', styles.hero)}>
        <div className="container text--center">
          <h2 className="hero__subtitle"><Translate>One-Cmd Installation</Translate></h2>
          <div className={styles.installTextWrapper}>
            <CodeBlock>kubectl krew install pod-lens</CodeBlock>
          </div>
        </div>
      </div>

      <main className={clsx('hero', styles.hero)}>
        <div className="container">
          <section className={styles.features}>
            <div className="container">
              {features.map((f, idx) => (
                <Feature key={idx} {...f} />
              ))}
              {demo.map((f, idx) => (
                <Demo key={idx} {...f} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className={clsx('hero', styles.installTextWrapper)}>
        <div className="container text--center" style={{ height: '50em'}}>
          <h2><Translate>Showcase</Translate></h2>
          <Asciinema url="https://asciinema.org/a/400180.js"></Asciinema>
          <script id="asciicast-400180" src="https://asciinema.org/a/400180.js" async></script>
        </div>
      </div>
    
    </Layout>
  );
}
