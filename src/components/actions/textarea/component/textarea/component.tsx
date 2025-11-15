import React, { useContext, useId } from 'react';
import { TextareaContext } from '../component';
import styles from '../component.module.css';
import { TextareaTextareaProps } from './component.interface';

export function TextareaTextarea({
  icon: Icon,
  label,
  children,
  ...props
}: TextareaTextareaProps) {
  const context = useContext(TextareaContext);

  if (!context) {
    throw new Error(
      'Textarea.Textarea must be used within an Textarea component.'
    );
  }

  if (!props?.id) {
    props.id = useId();
  }
 
  return (
    <div className={styles.textarea ?? ''}>
      <textarea
        {...props}
        id={props?.id}
        name={props?.name ?? props?.id}
        value={props?.value}
        placeholder={props?.placeholder ?? label}
        rows={props?.rows ?? 4}
        onInput={(e) => {
          const t = e.currentTarget;
          t.style.height = 'auto';
          t.style.height = `${t.scrollHeight}px`;
        }}
        className={`mosuk-textarea-input ${props?.className ?? ''}`}
      />

      {label && (
        <label htmlFor={props?.id} className={styles.label}>
          {label}
        </label>
      )}

      {Icon && (
        <label htmlFor={props?.id} className={styles.icon} aria-hidden="true">
          <Icon />
        </label>
      )}

      {children}
    </div>
  );
}
