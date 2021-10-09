import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { CloseIcon } from '../../../../public/svg';
import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleOnClose: () => void;
};

export const Modal = ({ children, isOpen, handleOnClose }: ModalProps) => {
  return (
    <section className={cx(styles.container, { [styles.isOpen]: isOpen })}>
      <header className={styles.modalHead}>
        <Image
          src='/images/ViniciusLogo.png'
          alt='Vinicius Logo'
          width={220}
          height={110}
        />
        <CloseIcon onClick={handleOnClose} />
      </header>
      <main>{children}</main>
    </section>
  );
};
