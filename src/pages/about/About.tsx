import React from 'react';
import Image from 'next/image';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <aside className={styles.pictureContainer}>
          <Image
            src='/images/ViniciusPic.jpeg'
            alt='Foto Vinicius Alves'
            width={500}
            height={500}
          />
        </aside>

        <aside className={styles.descriptionContainer}>
          <h2>ABOUT ME</h2>
          <p>
            Olá, me chamo Vinícius Alves de Faria. Tenho inglês avançado, nível
            B2, pela formação na UpTime, Técnico de Informática formado pela
            Universidade Federal de Viçosa, e estudante de Sistemas de
            Informação pela Pontifícia Universidade Católica de Minas Gerais,
            recebi prêmios de honra ao mérito por aproveitamento durante o meu
            curso técnico e ensino médio pela UFV, prêmio de primeiro lugar na
            feira FECITEC que ocorre na UFV - Florestal, nesta feira apresentei
            um projeto na área multidisciplinar (com presença de programação de
            microcontroladores), esse trabalho foi indicado à apresentação na
            FEBRACE de São Paulo e na London International Youth Science Forum
            (LIYSF) em Londres, infelizmente, ambos os eventos foram cancelados
            pela pandemia. Trabalhei como técnico de informática na empresa Javé
            Logística, posteriormente como desenvolvedor VBA e WEB pela mesma
            companhia. Realizei projetos no que tange ao desenvolvimento de
            aplicativos utilizando as tecnologias WEB, principalmente, React
            Native, ReactJS, NodeJS dentre outras tecnologias, esses projetos
            foram desenvolvidos perante a orientação de cursos gratuitos
            disponibilizados na internet e/ou professores da UFV.
          </p>
        </aside>
      </main>
      <Footer />
    </div>
  );
};
