import classNames from 'classnames';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Icon } from '../../component/component';
import { IconDeleteProps } from './component.interface';
import styles from './component.module.css';

export function IconDelete({
  danger,
  onDanger,
  onDelete,
  ...rest
}: IconDeleteProps) {
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
    <Icon
      {...rest}
      title={isConfirming ? (danger?.title ?? 'Подтвердить удаление') : (rest?.title ?? 'Удалить')}
      onClick={handleClick}
      className={classNames(
        'mosuk-icon-delete',
        styles.icon,
        {
          [styles.danger]: isConfirming,
          [danger?.className ?? '']: isConfirming,
        },
        rest?.className
      )}
    >
      {rest?.children}
    </Icon>
  );
}
