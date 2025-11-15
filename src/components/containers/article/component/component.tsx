import React from 'react';
import { ArticleProps } from './component.interface';
import styles from './component.module.css';

export function Article({ ...props }: ArticleProps) {
  return (
    <article
      {...props}
      className={`mosuk-article ${styles['article']} ${props?.className ?? ''}`}
    >
      {props?.children}
    </article>
  );
}
