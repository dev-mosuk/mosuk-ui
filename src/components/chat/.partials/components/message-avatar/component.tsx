'use client';

import { ChatMessageAvatarProps } from '@/components/chat/.partials/components/message-avatar/component.interface';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { Image } from '@/components/image';
import classNames from 'classnames';
import React from 'react';

export function ChatMessageAvatar({
  src,
  alt,
  fallback,
  ...rest
}: ChatMessageAvatarProps) {
  const label = fallback?.trim().slice(0, 2);

  return (
    <Image
      {...rest}
      className={classNames(
        'mosuk-chat-message-avatar',
        styles.avatar,
        rest?.className,
      )}
    >
      <Image.Dots />

      {src ? (
        <Image.Image src={src} alt={alt ?? ''} className={styles.image} />
      ) : (
        <span className={styles.fallback} aria-hidden={!alt}>
          {label || alt?.slice(0, 2) || '?'}
        </span>
      )}
    </Image>
  );
}
