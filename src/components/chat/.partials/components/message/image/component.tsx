import { ChatMessageImageProps } from '@/components/collections/chat/.partials/components/message/image/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import { Image } from '@/components/display/image';
import classNames from 'classnames';
import React from 'react';

export function ChatMessageImage({ src, alt, ...rest }: ChatMessageImageProps) {
  return (
    <button
      type='button'
      {...rest}
      className={classNames(
        'mosuk-chat-message-image',
        styles.photo,
        rest?.className,
      )}
    >
      <Image className={styles.frame}>
        <Image.Dots />
        <Image.Image
          src={src}
          alt={alt || 'Image'}
          className={styles.media}
        />
      </Image>
    </button>
  );
}
