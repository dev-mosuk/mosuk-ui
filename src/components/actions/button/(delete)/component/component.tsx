import classNames from 'classnames';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../../component/component';
import { ButtonDeleteProps } from './component.interface';
import styles from './component.module.css';

export function ButtonDelete({
  danger,
  onDanger,
  onDelete,
  ...rest
}: ButtonDeleteProps) {
  const timerRef = useRef<number | undefined>(undefined);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!isConfirming) {
      e.preventDefault();
      e.stopPropagation();
      setIsConfirming(true);

      timerRef.current = window.setTimeout(() => {
        onDanger?.();
        setIsConfirming(false);
        timerRef.current = undefined;
      }, danger?.timer ?? 3000);

      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }

    setIsConfirming(false);
    onDelete?.();
  };


  return (
    <Button
      {...rest}
      title={isConfirming ? (danger?.title ?? 'Подтвердить удаление') : (rest?.title ?? 'Удалить')}
      onClick={handleClick}
      className={classNames(
        'mosuk-button-delete',
        styles.button,
        {
          [styles.danger]: isConfirming,
          [danger?.className ?? '']: isConfirming,
        },
        rest?.className
      )}
    >
      {rest?.children}
    </Button>
  );
}
