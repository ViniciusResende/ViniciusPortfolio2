import type { NextPage } from 'next';
import Head from 'next/head';
import TypewriterComponent from 'typewriter-effect';
import cx from 'classnames';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import styles from '../styles/Home/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Vinícius Alves</title>
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <strong>my Website!</strong>
        </h1>

        <h3 className={styles.subTitle}>
          <span>Vamos fazer a diferença juntos?</span>
          <br />
          <code className={styles.code}>bora/codar.ts</code>
        </h3>

        <h2 className={cx(styles.title, styles.secondary)}>
          Atualmente sou um <strong>Desenvolvedor Frontend Junior</strong> e um{' '}
          <strong>Estudante Entusiasmado</strong>
        </h2>

        <p className={styles.typewriterSection}>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString('Junior Frontend Developer')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Web Development')
                .pauseFor(500)
                .deleteAll()
                .typeString('Fullstack Enthusiastic')
                .pauseFor(500)
                .deleteAll()
                .typeString('Student')
                .pauseFor(500)
                .deleteAll()
                .typeString('Technology Lover')
                .pauseFor(500)
                .deleteAll()
                .start();
            }}
            options={{
              delay: 80,
              deleteSpeed: 25,
              loop: true,
            }}
          />
        </p>

        <button className={styles.contactMe}>contate-me</button>

        <div className={styles.grid}>
          <a
            href='https://www.linkedin.com/in/viniciusalvesdefaria/'
            className={styles.card}
            target='_blank'
            rel='noreferrer'>
            <h2>Conecte-se pelo Linkedin &rarr;</h2>
            <p>
              Você pode conectar-se comigo pelo Linkedin para então fazermos
              contato!
            </p>
          </a>

          <a
            href='https://github.com/ViniciusResende'
            className={styles.card}
            target='_blank'
            rel='noreferrer'>
            <h2>Encontre-me no GitHub &rarr;</h2>
            <p>
              Você pode me achar pelo GitHub onde estou sempre colocando algumas
              novidades.
            </p>
          </a>

          {/* <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
