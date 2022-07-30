import type { NextPage } from 'next';
import TypewriterComponent from 'typewriter-effect';
import Particles from 'react-tsparticles';
import cx from 'classnames';

import { useContact } from '../hooks';
import { Layout } from '../components/Layout';

import styles from '../styles/Home/Home.module.scss';

const Home: NextPage = () => {
  const { handleControlModalOpenness } = useContact();

  return (
    <Layout title='Home'>
      <div className={styles.content}>
        <section className={styles.particlesContainer}>
          <Particles
            params={{
              background: {
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
              },
              fullScreen: {
                enable: true,
                zIndex: 1,
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                    parallax: {
                      force: 60,
                    },
                  },
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  grab: {
                    distance: 400,
                  },
                },
              },
              particles: {
                color: {
                  value: '#3178c6',
                },
                links: {
                  color: {
                    value: '#ffffff',
                  },
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                },
                move: {
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  enable: true,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 80,
                },
                opacity: {
                  value: {
                    min: 0.1,
                    max: 0.5,
                  },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                  },
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: 3,
                  animation: {
                    speed: 17,
                    minimumValue: 10,
                  },
                },
                stroke: {
                  width: 1,
                  color: {
                    value: '#ffffff',
                    animation: {
                      h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true,
                      },
                      s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true,
                      },
                      l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true,
                      },
                    },
                  },
                },
              },
            }}
          />
        </section>
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
            Atualmente sou um <strong>Desenvolvedor Frontend</strong> e
            um <strong>Estudante Entusiasmado</strong>
          </h2>

          <p className={styles.typewriterSection}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString('Frontend Developer')
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

          <button
            className={styles.contactMe}
            onClick={() => handleControlModalOpenness(true)}>
            contate-me
          </button>

          <section className={styles.gridCards}>
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
                Você pode me achar pelo GitHub onde estou sempre colocando
                algumas novidades.
              </p>
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
