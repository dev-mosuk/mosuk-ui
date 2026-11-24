import { ChatMessageFileProps } from '@/components/chat/.partials/components/message-file/component.interface';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { formatFileSize } from '@/components/chat/.partials/utilities/format-file-size';
import { File } from '@/components/file';
import classNames from 'classnames';
import React from 'react';

export function ChatMessageFile({
  name,
  size,
  href,
  ...rest
}: ChatMessageFileProps) {
  const sizeLabel =
    typeof size === 'number' && Number.isFinite(size)
      ? formatFileSize(size)
      : null;
  const className = classNames(
    'mosuk-chat-message-file',
    styles.file,
    rest.className,
  );

  const content = (
    <>
      <File name={name} size={8} variant='secondary'>
        <File.Fallback>
          <File.Icon />
        </File.Fallback>
      </File>
      <span className={styles.info}>
        <span className={styles.name}>{name}</span>
        {sizeLabel ? <span className={styles.size}>{sizeLabel}</span> : null}
      </span>
    </>
  );

  if (href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        {...anchorProps}
        href={href}
        className={className}
        download={anchorProps.download ?? name}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type='button' {...buttonProps} className={className}>
      {content}
    </button>
  );
}
