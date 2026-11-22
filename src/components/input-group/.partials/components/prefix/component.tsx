'use client';

import type { InputGroupPrefixProps } from '@/components/input-group/.partials/components/prefix/component.interface';
import { useInputGroup } from '@/components/input-group/.partials/hooks/hook';
import styles from '@/components/input-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useLayoutEffect, useRef } from 'react';

export function InputGroupPrefix({
  className,
  children,
  onClick,
  ...rest
}: InputGroupPrefixProps) {
  const { setPrefixWidth } = useInputGroup();
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const publish = () => {
      setPrefixWidth(Math.ceil(element.getBoundingClientRect().width));
    };

    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(element);

    return () => {
      observer.disconnect();
      setPrefixWidth(0);
    };
  }, [setPrefixWidth, children]);

  return (
    <span
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-input-group-prefix',
        styles.prefix,
        className,
      )}
      onClick={(event) => {
        if (!(event.target as HTMLElement).closest('button, a')) {
          const input = event.currentTarget
            .closest('.mosuk-input-group')
            ?.querySelector<HTMLElement>('input, textarea');

          input?.focus();
        }

        onClick?.(event);
      }}
    >
      {children}
    </span>
  );
}
