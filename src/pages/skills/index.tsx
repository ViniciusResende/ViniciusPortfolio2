import React from 'react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import {
  ReactIcon,
  NextJsIcon,
  SassIcon,
  CypressIcon,
  AwsIcon,
  TypeScriptLogo,
  NpmIcon,
  GoogleAnalyticsIcon,
  WebpackIcon,
  GitIcon,
  NodeJsIcon,
  KubernetsIcon,
} from '../../../public/svg';

import styles from './Skills.module.scss';

const Skills = () => {
  const skillItemsArray = [
    {
      title: 'React Framework',
      description:
        'Atualmente sou um Desenvolvedor Frontend Junior, e o framework de desenvolvimento de interfaces que tenho mais familiaridade é o ReactJs, de forma que, desenvolvo aplicações diariamente utilizando essa tecnologia. Ainda nesse contexto, tenho um pouco de familidariade com o React Native para o desenvolvimento mobile, provinda da realização de projetos pessoais.',
      icon: <ReactIcon />,
    },
    {
      title: 'Next.js Framework',
      description:
        'No momento estou buscando aprimorar meus conhecimento no framework Next.js, uma vez que este têm mostrado grande potencial no ecossistema frontend. Não tenho contato diário com essa ferramenta em meu trabalho, contudo, desenvolvo projetos e realizo cursos em paralelo com estudos sobre a documentação do Next.js.',
      icon: <NextJsIcon />,
    },
    {
      title: 'Processadores CSS',
      description:
        'No desenvolvimento frontend é muito comum a utilizção de pré-processadores e pós-processadores CSS, e eu não fiquei de fora dessa onda. Trabalho diariamente com o próprio CSS, o Stylus e styled-components, para projetos pessoais, como esse, gosto bastante de utilizar o Sass.',
      icon: <SassIcon />,
    },
    {
      title: 'Testes Automatizados',
      description:
        'Contemporaneamente é impossível falar de grandes softwares com qualidade sem falarmos de testes automatizados, recentemente tenho aprendido bastante sobre testes automatizados E2E e de Integração utilizando a ferramenta Cypress, e para testes unitários, utilizando o Jest com Enzyme, bem como a React Testing Library que é desenvolvida tendo o o próprio Jest como base.',
      icon: <CypressIcon />,
    },
    {
      title: 'DevOps',
      description:
        'No meu trabalho atual tenho a oportunidade de desenvolver algumas atividades relacionadas a área de DevOps. Tenho experiência no desenvolvimento de fluxos de CI/CD utilizando ferramentas como CircleCI e Cloudflare, dessa forma, é possível executar testes automatizados e fzer deploy da aplicação em servidores AWS, por exemplo, de forma automática.',
      icon: <AwsIcon />,
    },
    {
      title: 'Linguagens e Tipagem',
      description:
        'Acredito que para desenvolver um código com elevada manutenibilidade é essencial a utilização de alguma tipagem forte, como o JavaScript em si não tem essa tipagem forte, utilizo diariamente o PropTypes com o JavaScript ou a linguagem TypeScript que adiciona tipagem ao usual JavaScript.',
      icon: <TypeScriptLogo />,
    },
    {
      title: 'Open Source & npm',
      description:
        'Na equipe onde trabalho atualmente, tenho a incrível oportunidade de participar do desenvolvimento de uma biblioteca Open Source corriqueiramente, desenvolvo atualizações para a biblioteca de componentes React conhecida como grimório-ui, nas palavras da própria documentação: "Grimório✨ | UI just like magic"',
      icon: <NpmIcon />,
    },
    {
      title: 'Google Analytics e Tag Manager',
      description:
        'No meu dia a dia tenho contato direto com a implementação de GTM em aplicações React utilizando a metodologia de DataLayer, bem como tenho contato com a integração Google Analytics com Google Tag Manager.',
      icon: <GoogleAnalyticsIcon />,
    },
    {
      title: 'Webpack & Babel',
      description:
        'Em alguns momentos do meu dia a dia como desenvolvedor preciso realizar incrementações e adaptações nos arquivos de configuração do Webpack e Babel dos projetos React. Dessa forma, é possível realizar um build optimizado de aplicações React e bibliotecas npm.',
      icon: <WebpackIcon />,
    },
    {
      title: 'Git & Git Flow',
      description:
        'Ao trabalhar em uma equipe contendo diferentes desenvolvedores, conhecimentos de Git e Git Flow são indispensáveis. Atualmente trabalho em uma equipe onde prezamos pela realização de commits seguindo um padrão pré estabelecido e pelo merges apenas com o approve de um Pull Request. Além disso contamos com um fluxo de CI/CD que executa testes automaticamente após algum push.',
      icon: <GitIcon />,
    },
    {
      title: 'Um Pouco de Backend',
      description:
        'Sou um desenvolvedor que, atualmente, é focado em frontend, contudo, principalmente para projetos pessoais, preciso de desenvolver algumas APIs. Na área do backend tenho alguns conhecimentos em NodeJs e Elixir, por enquanto uso apenas para me divertir em alguns projetos, mas pretendo me tornar um desenvolvedor FullStack em algum momento da minha carreira!',
      icon: <NodeJsIcon />,
    },
    {
      title: 'Aventuras na Conteinerização',
      description:
        'Algumas vezes tive a oportunidade de fazer cursos voltados a área de DevOps utilizando conteinerização, então aprendi um pouco de Docker para a criação de containers em si e de Kubernets para a orquestração desses containers.',
      icon: <KubernetsIcon />,
    },
  ];

  return (
    <section className={styles.container}>
      <Head>
        <title>Skills | Vinícius Alves</title>
      </Head>
      <Header />
      <main className={styles.content}>
        <h2>Minhas Abilidades</h2>

        <section className={styles.cardsContainer}>
          {skillItemsArray.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Skills;
