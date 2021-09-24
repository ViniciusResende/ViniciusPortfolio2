import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import styles from './Timeline.module.scss';

const Timeline = () => {
  const timelineArray = [
    {
      year: 2018,
      content:
        'Em 2018 iniciei um curso técnico em informática concomitante ao ensino médio na Universidade Federal de Viçosa, com isso dei início aos meus estudos na área da programação, principalmente atrelados à lógica de programação, desenvolvida, majoritariamente, em C e Java.',
    },
    {
      year: 2019,
      content:
        'Em 2019 estava no segundo ano do meu curso e atuei pela primeira vez como técnico de informática, principalmente na área do suporte técnico, também, nesse ano, comecei meus estudos nas tecnologias web. Assim, deu-se início à minha trajetória construindo o conhecimento acerca dos fundamentos do desenvolvimento web, por isso, me aventurei no universo do HTML, CSS e JavaScript.',
    },
    {
      year: 2020,
      content:
        'No ano de 2020, foi o ano em que eu reforcei muito meus conhecimentos de programação solidificando-os e ampliando-os. Neste ano aprofundei meus estudos nas tecnologias web mais atuais, como ReactJs, React Native e NodeJs. Após obter conhecimento suficiente com essas tecnologias, desenvolvi um complexo aplicativo para o Trabalho de Conclusão de Curso do meu curso técnico. Essa experiêcia foi essencial para me colocar no próximo nível como desenvolvedor e despertar o fogo da minha paixão por programação.',
    },
    {
      year: 2021,
      content:
        'No primeiro semestre de 2021, aprofundei meus conhecimentos consideravelmente no desenvolvimento Frontend, desenvolvendo aplicações pessoais e realizando cursos gratuítos na internet pude expandir minha base de abrangência na programação. Neste mesmo período, comecei o curso de graduação em Sistemas de Informação pela UFMG onde desenvolvo minhas habilidades como profissional de tecnologia diariamente. Posteriormente, fui contratado pela empresa Americanas S.A. para ocupar a cadeira de Desenvolvedor Frontend Junior, e, a partir daí, tive outro salto de conhecimento como programador, pude avançar meu nível de forma exponencial estando no dia a dia de uma empresa extremamente consolidada no Brasil.',
    },
  ];

  return (
    <section className={styles.container}>
      <Head>
        <title>Timeline | Vinícius Alves</title>
      </Head>
      <Header />
      <main className={styles.content}>
        {timelineArray.map((item) => (
          <div key={item.year} className={styles.timelineCard}>
            <h2>{item.year}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </main>
      <Footer />
    </section>
  );
};

export default Timeline;
