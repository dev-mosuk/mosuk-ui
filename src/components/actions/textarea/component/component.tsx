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
  const shouldAutosize = autosize && isNativeTextarea;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange, style, ref: propRef, ...restProps } = rest as any;

  const resize = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;

    // Проверяем, виден ли элемент
    const isVisible = el.offsetParent !== null;
    if (!isVisible) return;

    el.style.transition = 'none';

    // Используем 1px вместо auto - не вызывает скролл страницы
    el.style.height = '1px';
    el.style.height = `${el.scrollHeight}px`;

    // Восстанавливаем transition в следующем фрейме
    requestAnimationFrame(() => {
      if (el.style.transition) {
        el.style.transition = '';
      }
    });
  }, []);

  const setRefs = useCallback(
    (node: any) => {
      textareaRef.current = node instanceof HTMLTextAreaElement ? node : null;

      if (propRef) {
        if (typeof propRef === 'function') {
          propRef(node);
        } else {
          (propRef as React.MutableRefObject<any>).current = node;
        }
      }
    },
    [propRef],
  );

  // Перерасчет при изменении value или defaultValue
  useEffect(() => {
    if (shouldAutosize && textareaRef.current) {
      resize(textareaRef.current);
    }
  }, [shouldAutosize, resize, restProps?.value, restProps?.defaultValue]);

  // Отслеживаем появление элемента в DOM (для tabs с keepMounted)
  useEffect(() => {
    if (!shouldAutosize || !textareaRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && textareaRef.current) {
            // Элемент стал видимым - пересчитываем высоту
            resize(textareaRef.current);
          }
        });
      },
      { threshold: 0.01 },
    );

    observer.observe(textareaRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldAutosize, resize]);

  const handleChange = useCallback(
    (e: any) => {
      if (shouldAutosize && e?.currentTarget instanceof HTMLTextAreaElement) {
        resize(e.currentTarget);
      }
      onChange?.(e);
    },
    [onChange, shouldAutosize, resize],
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
      className={classNames(
        'mosuk-textarea',
        styles.textarea,
        restProps?.className,
      )}
    >
      {restProps?.children}
    </Component>
  );
}
