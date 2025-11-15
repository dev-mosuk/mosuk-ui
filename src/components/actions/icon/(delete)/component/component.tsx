import classNames from 'classnames';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { alertsService } from '../../../../../services/alerts/service';
import { Icon } from '../../../../actions/icon/component/component';
import { IconDeleteProps } from './component.interface';
import styles from './component.module.css';

export function IconDelete({
  alert,
  onDelete,

  ...props
}: IconDeleteProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isConfirming) {
      timerRef.current = window.setTimeout(() => {
        alertsService.info(alert?.message ?? 'Для удаления нажмите дважды на иконку удаления');
        setIsConfirming(false);
      }, alert?.timeout ?? 3 * 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isConfirming, alert, onDelete]);

  const handleClick = async (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!isConfirming) {
      e.preventDefault();
      e.stopPropagation();
      setIsConfirming(true);
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (onDelete) {
      setIsConfirming(false);
      onDelete();
    }
  };

  return (
    <Icon
      {...props}
      title={props?.title ?? (isConfirming ? 'Подтвердить удаление' : 'Удалить')}
      onClick={handleClick}
      className={classNames(
        'mosuk-icon-delete',
        styles.icon,
        {
          [styles.danger]: isConfirming,
        },
        props?.className
      )}
    >
      {props?.children}
    </Icon>
  );
}
