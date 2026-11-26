'use client';

import { ChatMessageImageProps } from '@/components/chat/.partials/components/message-image/component.interface';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { Image } from '@/components/image';
import classNames from 'classnames';
import { Images } from 'lucide-react';
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
        <Image.Loader />
        <Image.View src={src} alt={alt || 'Image'} className={styles.media} />
        <Image.Fallback>
          <Images aria-hidden strokeWidth={1.25} />
        </Image.Fallback>
      </Image>
    </button>
  );
}
