import React from 'react';
import cx from 'classnames';

import styles from './Loader.module.scss';

type LoaderProps = {
  type?: 'normal' | 'small';
};

export const Loader = ({ type = 'normal' }: LoaderProps) => {
  return (
    <div
      className={cx(styles.container, {
        [styles[type]]: type,
      })}>
      <div
        className={cx(styles.elementOut, {
          [styles[type]]: type,
        })}>
        <div
          className={cx(styles.elementIn, {
            [styles[type]]: type,
          })}
        />
      </div>
    </div>
  );
};
