import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { getNextApiUrl } from '../../utils';
import { Loader } from '../Loader';

import { BarsIcon } from '../../../public/svg';
import styles from './Header.module.scss';

type MenuItemData = {
  name: string;
  path: string | null;
};

export const Header = () => {
  const [menuItems, setMenuItems] = useState<MenuItemData[]>();
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    async function getMenuItems() {
      const response = await fetch(`${getNextApiUrl()}/menu`);
      const menuItems: MenuItemData[] = await response.json();

      setMenuItems(menuItems);
    }

    getMenuItems();
  }, []);

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
          {menuItems ? (
            <>
              {menuItems.map((item) => (
                <span key={item.name} onClick={() => setIsCollapsed(true)}>
                  <Link href={item.path || ''}>{item.name}</Link>
                </span>
              ))}
            </>
          ) : (
            <Loader />
          )}
        </nav>
      </div>
    </header>
  );
};
