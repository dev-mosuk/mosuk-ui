'use client';

import type { InputGroupPostfixProps } from '@/components/input-group/.partials/components/postfix/component.interface';
import { useInputGroup } from '@/components/input-group/.partials/hooks/hook';
import styles from '@/components/input-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useLayoutEffect, useRef } from 'react';

export function InputGroupPostfix({
  className,
  children,
  onClick,
  ...rest
}: InputGroupPostfixProps) {
  const { setPostfixWidth } = useInputGroup();
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const publish = () => {
      setPostfixWidth(Math.ceil(element.getBoundingClientRect().width));
    };

    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(element);

    return () => {
      observer.disconnect();
      setPostfixWidth(0);
    };
  }, [setPostfixWidth, children]);

  return (
    <span
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-input-group-postfix',
        styles.postfix,
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
