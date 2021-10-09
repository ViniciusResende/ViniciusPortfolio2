import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import MenuItems from './menuItems.json';

import { useContact } from '../../hooks';

import { BarsIcon } from '../../../public/svg';
import styles from './Header.module.scss';

export const Header = () => {
  const { handleControlModalOpenness } = useContact();

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoButtonContainer}>
          <div className={styles.logoImgContainer}>
            <Image
              src='/images/ViniciusLogo.png'
              alt='Vinicius Logo'
              width={180}
              height={90}
            />
          </div>
          <button
            className={styles.openMenuButton}
            onClick={() => setIsCollapsed((prev) => !prev)}>
            <BarsIcon />
          </button>
        </div>
        <nav
          className={cx(styles.navigation, {
            [styles.collapsed]: isCollapsed,
          })}>
          {MenuItems.items.map((item) => (
            <span key={item.name} onClick={() => setIsCollapsed(true)}>
              {item.path ? (
                <Link href={item.path || ''}>{item.name}</Link>
              ) : (
                <button onClick={() => handleControlModalOpenness(true)}>
                  {item.name}
                </button>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};
