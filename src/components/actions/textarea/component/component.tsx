import classNames from 'classnames';
import React, { ElementType, useCallback, useEffect, useRef } from 'react';
import { TextareaProps } from './component.interface';
import styles from './component.module.css';

export function Textarea<C extends ElementType = 'textarea'>({
  as,
  autosize = true,
  ...rest
}: TextareaProps<C>) {
  const Component = (as || 'textarea') as ElementType;
  const isNativeTextarea = !as || as === 'textarea';
  const shouldAutosize = Boolean(autosize && isNativeTextarea);

  const localTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { onChange, style, ref: propRef, ...restProps } = rest as any;

  const resizeNativeTextarea = (el: HTMLTextAreaElement) => {
    el.style.height = '0px';
    el.style.height = `${el.scrollHeight}px`;
  };

  const setRefs = useCallback(
    (node: any) => {
      localTextareaRef.current = node instanceof HTMLTextAreaElement ? node : null;
      if (propRef) {
        if (typeof propRef === 'function') {
          propRef(node);
        } else {
          try {
            (propRef as React.MutableRefObject<any>).current = node;
          } catch {}
        }
      }
    },
    [propRef],
  );

  useEffect(() => {
    if (shouldAutosize && localTextareaRef.current) {
      resizeNativeTextarea(localTextareaRef.current);
    }
  }, [shouldAutosize, (restProps as any)?.value, (restProps as any)?.defaultValue, restProps?.rows]);

  const handleChange = useCallback(
    (e: any) => {
      if (shouldAutosize && e?.currentTarget instanceof HTMLTextAreaElement) {
        resizeNativeTextarea(e.currentTarget);
      }
      onChange?.(e);
    },
    [onChange, shouldAutosize],
  );

  return (
    <Component
      {...restProps}
      ref={setRefs}
      id={restProps.id}
      name={restProps.name ?? restProps.id}
      rows={restProps?.rows ?? 3}
      onChange={handleChange}
      style={shouldAutosize ? { ...style, overflowY: 'hidden' } : style}
      className={classNames('mosuk-textarea', styles.textarea, restProps?.className)}
    >
      {restProps?.children}
    </Component>
  );
}