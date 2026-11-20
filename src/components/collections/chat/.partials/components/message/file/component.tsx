import { ChatMessageFileProps } from '@/components/collections/chat/.partials/components/message/file/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import { formatFileSize } from '@/components/collections/chat/.partials/utilities/format-file-size';
import classNames from 'classnames';
import { File as FileIcon } from 'lucide-react';
import { AdobePdf } from 'mosuk-icons/shared/components/adobe/pdf';
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
  const isPdf = name.toLowerCase().endsWith('.pdf');
  const className = classNames(
    'mosuk-chat-message-file',
    styles.file,
    rest.className,
  );

  const content = (
    <>
      <span className={styles.fileIcon}>
        {isPdf ? (
          <AdobePdf alt='PDF' className={styles.fileIconGlyph} />
        ) : (
          <FileIcon className={styles.fileIconGlyph} strokeWidth={1.5} />
        )}
      </span>
      <span className={styles.fileInfo}>
        <span className={styles.fileName}>{name}</span>
        {sizeLabel ? (
          <span className={styles.fileSize}>{sizeLabel}</span>
        ) : null}
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
