import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { useResize } from '../../../hooks';

import { CloseXIcon, CheckIcon } from '../../../../public/svg';
import styles from './Toast.module.scss';

type ToastProps = {
  message: string;
  type?: 'success' | 'fail';
  onDismiss: () => void;
  timeToClose?: number;
};

export const Toast = ({
  message,
  type = 'success',
  onDismiss,
  timeToClose = 5000,
}: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAboutToClose, setIsAboutToClose] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAboutToClose(true);
    }, timeToClose);

    setTimeout(handleEndTimer, timeToClose + 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEndTimer() {
    setIsOpen(false);
    onDismiss();
  }

  function handleClose() {
    setIsAboutToClose(true);

    setTimeout(handleEndTimer, 500);
  }

  function onResize() {
    if (window.innerWidth < 850) setIsMobile(true);
    else setIsMobile(false);
  }
  useResize(onResize);

  const positionToastClass = cx({
    [styles.isAboutToClose]: isAboutToClose,
    [styles.isMobilePositioning]: isMobile,
    [styles.defaultPositioning]: !isMobile,
  });

  const typeToastClass = cx(styles.default, {
    [styles[type]]: type,
  });

  return (
    <>
      {isOpen && (
        <div className={positionToastClass}>
          <div className={typeToastClass}>
            {type === 'success' ? (
              <CheckIcon className={styles.toastIcon} />
            ) : (
              <CloseXIcon
                className={cx(styles.toastIcon, {
                  [styles[type]]: type,
                })}
              />
            )}
            <span className={styles.message}>{message}</span>
            <button className={styles.buttonClose} onClick={handleClose}>
              <CloseXIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
