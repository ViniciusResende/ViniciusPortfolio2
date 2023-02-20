import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getNextApiUrl } from '../../utils';
import { useResize } from '../../hooks';

import { Layout } from '../../components/Layout';
import { Slider } from '../../components/elements/Slider';

import allProjectsArrayJson from './allProjects.json';
import styles from './Projects.module.scss';

type ProjectData = {
  id: string;
  name: string;
  description: string;
  img: string;
};

const Projects = () => {
  const projectsArray: ProjectData[] = allProjectsArrayJson.items;

  const [slidesQuantity, setSlidesQuantity] = useState(3);
  function onResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 850) setSlidesQuantity(1);
    else if (windowWidth < 1255) setSlidesQuantity(2);
    else setSlidesQuantity(3);
  }
  useResize(onResize);

  useEffect(() => {
    onResize();
  }, []);

  return (
    <Layout title='Projects'>
      <main className={styles.content}>
        <h2>Meus Projetos</h2>
        <Slider
          className={styles.slider}
          delay={10000}
          slidesToShow={slidesQuantity}>
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
    </Layout>
  );
};

export default Projects;
