import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getNextApiUrl } from '../../utils';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Slider } from '../../components/Slider';

import styles from './Projects.module.scss';
import { GetStaticProps } from 'next';

type ProjectData = {
  id: string;
  name: string;
  description: string;
  img: string;
};

type ProjectsProps = {
  projectsArray: ProjectData[];
};

const Projects = ({ projectsArray }: ProjectsProps) => {
  return (
    <section className={styles.container}>
      <Head>
        <title>Projects | Vinícius Alves</title>
      </Head>
      <Header />
      <main className={styles.content}>
        <h2>Meus Projetos</h2>
        <Slider className={styles.slider} delay={10000} slidesToShow={3}>
          {projectsArray.map((item) => (
            <Link key={item.id} href={`/projects/${item.id}`} passHref>
              <div className={styles.projectCard}>
                <h3>{item.name}</h3>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={253}
                  height={123}
                />
                <p>{item.description}</p>
                <button>Ver mais</button>
              </div>
            </Link>
          ))}
        </Slider>
      </main>
      <Footer />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${getNextApiUrl()}/projects`);
  const projectsArray: ProjectData[] = await response.json();

  return {
    props: {
      projectsArray,
    },
  };
};

export default Projects;
