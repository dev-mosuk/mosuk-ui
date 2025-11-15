import classNames from 'classnames';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { alertsService } from '../../../../../services/alerts/service';
import { Button } from '../../component/component';
import { ButtonDeleteProps } from './component.interface';
import styles from './component.module.css';

export function ButtonDelete({
  alert,
  onDelete,

  type,
  className,
  children,

  ...props
}: ButtonDeleteProps) {
  // ! Состояние подтверждения удаления
  const [isConfirming, setIsConfirming] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  // ! Таймер для отмены удаления
  useEffect(() => {
    if (isConfirming) {
      timerRef.current = window.setTimeout(() => {
        alertsService.info('Для удаления нажмите дважды на кнопку удаления');
        setIsConfirming(false);
      }, alert?.timeout ?? 3 * 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isConfirming, alert, onDelete]);

  // ! Обработка клика
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
      onDelete();
    }
  };

  return (
    <Button
      {...props}
      type={type ?? 'button'}
      title={props?.title ?? (isConfirming ? 'Подтвердить удаление' : 'Удалить')}
      onClick={handleClick}
      className={classNames({
        'mosuk-button-delete': true,
        [styles?.button]: styles.button,
        [styles?.danger]: isConfirming,
        className: className,
      })}
    >
      {children}
    </Button>
  );
}
