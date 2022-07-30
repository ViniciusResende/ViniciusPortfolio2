import React from 'react';
import cx from 'classnames';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getNextApiUrl } from '../../../utils';
import { ProjectData } from '../../../utils/types';
import {
  ArrowIcon,
  TriangleIcon,
  LinkedinIcon,
  GitHubIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  SassIcon,
  StyledComponentsIcon,
  TypeScriptLogo,
  JavaScriptLogo,
  SqliteIcon,
  MongoIcon,
  ExpoIcon,
  FirebaseIcon,
  GraphQLIcon,
  ApolloGraphQLIcon,
  ExpressIcon,
} from '../../../../public/svg';
import { Layout } from '../../../components/Layout';

import styles from './Project.module.scss';

type ProjectProps = {
  project: ProjectData;
};

const Project = ({ project }: ProjectProps) => {
  const technologies = {
    react: <ReactIcon style={{ fill: '#61DAFB' }} />,
    next: <NextJsIcon />,
    nodejs: <NodeJsIcon style={{ fill: '#83CD29' }} />,
    sass: <SassIcon style={{ fill: '#CB6699' }} />,
    styledComponents: <StyledComponentsIcon />,
    typescript: <TypeScriptLogo style={{ fill: '#007acc' }} />,
    javascript: <JavaScriptLogo />,
    sqlite: <SqliteIcon />,
    mongo: <MongoIcon />,
    expo: <ExpoIcon />,
    firebase: <FirebaseIcon />,
    graphql: <GraphQLIcon />,
    apollographql: <ApolloGraphQLIcon />,
    express: <ExpressIcon />,
  };

  const projectsCoverColors = {
    podcastr: '#8257e5',
    rivpr: '#969696',
    let_me_ask: '#f159f9',
    time_to_moveit: '#5965e0',
    scarab: '#49ff0c',
    plant_manager: '#00c063'
  };

  const router = useRouter();
  const { projectId } = router.query;
  const NumberProjectId = Number(projectId);

  return (
    <Layout title={project.name}>
      <main className={styles.content}>
        <header>
          <nav>
            <Link href='/projects' passHref>
              <ArrowIcon />
            </Link>
          </nav>
        </header>
        <div className={styles.thumbnailContainer}>
          {NumberProjectId > 1 && (
            <Link href={`/projects/${NumberProjectId - 1}`} passHref>
              <button type='button' className={styles.goBackButton}>
                <TriangleIcon />
              </button>
            </Link>
          )}
          {NumberProjectId < 6 && (
            <Link href={`/projects/${NumberProjectId + 1}`} passHref>
              <button type='button' className={styles.goFowardButton}>
                <TriangleIcon />
              </button>
            </Link>
          )}
          <div className={styles.bannerBG} style={{
            //ts-ignored because the api value is controlled by inter code
            //@ts-ignore
            background: `linear-gradient(90deg, ${projectsCoverColors[project.key] || '#3178c6'} 0%, rgba(51,51,51,1) 100%)`,
          }}>
            <h1>{project.name}</h1>
          </div>
        </div>
        <div className={styles.divisoryLine} />
        <p className={styles.descriptionParagraph}>{project.description}</p>
        <div className={styles.divisoryLine} />
        <h4>Tecnologias utilizadas nesse projeto:</h4>
        <section className={styles.technologiesContainer}>
          {project.technologies.map((item) => (
            <div className={styles.technologie} key={item.icon}>
              {technologies[item.icon]}
              <strong>{item.name}</strong>
            </div>
          ))}
        </section>
        <div className={styles.divisoryLine} />
        <h4>Encontre esse projeto:</h4>
        <section
          className={cx(styles.findProject, {
            [styles.onlyOneChild]: !project.linkedinPost,
          })}>
          <a href={project.githubRepo} target='_blank' rel='noreferrer'>
            <GitHubIcon />
            <strong>Repositório GitHub</strong>
          </a>
          {project.linkedinPost && (
            <a href={project.linkedinPost} target='_blank' rel='noreferrer'>
              <LinkedinIcon />
              <strong>Post Linkedin</strong>
            </a>
          )}
        </section>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const array = ['1', '2', '3', '4', '5', '6'];

  const paths = array.map((projectId) => {
    return { params: { projectId: projectId } };
  });

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  project: ProjectData;
};

interface Params extends ParsedUrlQuery {
  projectId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const projectId = params?.projectId;

  const response = await fetch(
    `${getNextApiUrl()}/project?projectId=${projectId}`,
  );
  const project: ProjectData = await response.json();

  return {
    props: {
      project,
    },
  };
};

export default Project;
