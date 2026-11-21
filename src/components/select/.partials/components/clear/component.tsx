'use client';

import { SelectClearProps } from '@/components/select/.partials/components/clear/component.interface';
import { useSelect } from '@/components/select/.partials/hooks/hook';
import styles from '@/components/select/.partials/styles/component.module.css';
import classNames from 'classnames';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

export function SelectClear({ ...rest }: SelectClearProps) {
  const { clear, isEmpty, clearMounted } = useSelect();

  useEffect(() => {
    clearMounted.current = true;

    return () => {
      clearMounted.current = false;
    };
  }, [clearMounted]);

  return (
    <span
      {...rest}
      aria-hidden
      hidden={isEmpty}
      className={classNames(
        'mosuk-select-clear',
        styles.clear,
        rest?.className,
      )}
      onPointerDown={(event) => {
        rest?.onPointerDown?.(event);

        if (event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        clear();
      }}
      onClick={(event) => {
        rest?.onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {rest?.children ?? <X className={styles.icon} />}
    </span>
  );
}
