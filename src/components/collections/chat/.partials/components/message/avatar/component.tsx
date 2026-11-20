import { ChatMessageAvatarProps } from '@/components/collections/chat/.partials/components/message/avatar/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
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
    <span
      {...rest}
      className={classNames(
        'mosuk-chat-message-avatar',
        styles.avatar,
        rest?.className,
      )}
    >
      {src ? (
        <img src={src} alt={alt ?? ''} className={styles.avatarImage} />
      ) : (
        <span className={styles.avatarFallback} aria-hidden={!alt}>
          {label || alt?.slice(0, 2) || '?'}
        </span>
      )}
    </span>
  );
}
