import React from 'react';
import Link from 'next/link';

import { LinkedinIcon, GitHubIcon, InstagramIcon } from '../../../public/svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentSection}>
        <a
          href='mailto:viniciusfariaresende@gmail.com'
          target='_blank'
          rel='noreferrer'>
          viniciusfariaresende@gmail.com
        </a>
        <a
          href='https://goo.gl/maps/vUiUXWWaG5XuEvwE6'
          target='_blank'
          rel='noreferrer'>
          Contagem, Minas Gerais, Brasil
        </a>
        <a href='tel:+5531984033879' target='_blank' rel='noreferrer'>
          +55 (31) 98403-3879
        </a>
      </div>
      <div className={styles.contentSection}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/abilities'>Abilities</Link>
      </div>
      <div className={styles.contentSection}>
        <Link href='/timeline'>Timeline</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/networkings'>Networkings</Link>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.iconContainer}>
          <a
            href='https://www.linkedin.com/in/viniciusalvesdefaria/'
            target='_blank'
            rel='noreferrer'>
            <LinkedinIcon className={styles.contactIcon} />
          </a>
          <a
            href='https://github.com/ViniciusResende'
            target='_blank'
            rel='noreferrer'>
            <GitHubIcon className={styles.contactIcon} />
          </a>
          <a
            href='https://www.instagram.com/viniziu.alves/?hl=pt-br'
            target='_blank'
            rel='noreferrer'>
            <InstagramIcon className={styles.contactIcon} />
          </a>
        </div>
        <p>
          Feito com <strong>❤</strong> por Vinícius Alves.
        </p>
      </div>
    </footer>
  );
};
