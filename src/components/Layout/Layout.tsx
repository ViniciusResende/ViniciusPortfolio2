import React from 'react';
import Head from 'next/head';

import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './Layout.module.scss';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <section className={styles.container}>
      <Head>
        <title>{title} | Vinícius Alves</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
