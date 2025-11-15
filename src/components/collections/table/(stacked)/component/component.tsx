import React, { Children, cloneElement, CSSProperties, isValidElement, ReactElement, useEffect, useRef, useState } from 'react';
import { TableStackedProps, TableStackedRowProps } from './component.interface';
import styles from './component.module.css';

export function TableStacked({ ...props }: TableStackedProps) {
  const ref = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const triggerPx = 4 * remInPx;
    let frameId: number;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const bottomDistance = window.innerHeight - rect.top;
      const tableHeight = rect.height;
      const progressValue = Math.min(Math.max((bottomDistance - triggerPx) / tableHeight, 0), 1);

      frameId = window.requestAnimationFrame(() => {
        setProgress(progressValue);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const combinedStyle = {
    '--rows': Children.count(props?.children),
    '--table-progress': progress,
  } as CSSProperties;

  const mappedChildren = Children.map(props?.children, (child, idx) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<TableStackedRowProps>, {
        index: idx + 1,
      });
    }
    return child;
  });

  return (
    <ul
      {...props}
      ref={ref}
      className={`mosuk-table-stacked ${styles['table']} ${props?.className ?? ''}`}
      style={{ ...combinedStyle, ...props?.style }}
    >
      {mappedChildren}
    </ul>
  );
}

export function TableStackedRow({ index, ...props }: TableStackedRowProps) {
  const ref = useRef<HTMLLIElement>(null);

  const combinedStyle = {
    '--index': `${index ?? 1}`,
  } as CSSProperties;

  return (
    <li
      {...props}
      ref={ref}
      className={`mosuk-table-stacked-row ${styles['row']} ${props?.className ?? ''} `}
      style={{ ...combinedStyle, ...props?.style }}
    >
      {props?.children}
    </li>
  );
}

TableStacked.Row = TableStackedRow;
