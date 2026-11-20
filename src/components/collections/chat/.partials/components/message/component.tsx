import { ChatMessageAvatar } from '@/components/collections/chat/.partials/components/message/avatar/component';
import { ChatMessageStatus } from '@/components/collections/chat/.partials/components/message/component.enums';
import { ChatMessageProps } from '@/components/collections/chat/.partials/components/message/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Check, CheckCheck } from 'lucide-react';
import React, { Children, isValidElement, type ReactNode } from 'react';

function isAvatarElement(child: ReactNode): boolean {
  return isValidElement(child) && child.type === ChatMessageAvatar;
}

export function ChatMessage({
  side = 'start',
  time,
  status = null,
  children,
  ...rest
}: ChatMessageProps) {
  const childList = Children.toArray(children);
  const avatars = childList.filter(isAvatarElement);
  const content = childList.filter((child) => !isAvatarElement(child));
  const showStatus =
    status === ChatMessageStatus.Send || status === ChatMessageStatus.Read;
  const showFooter = time != null || showStatus;

  return (
    <div
      {...rest}
      data-side={side}
      className={classNames(
        'mosuk-chat-message',
        '@container/chat-message',
        'group/chat-message',
        styles.message,
        rest?.className,
      )}
    >
      {avatars}
      <div className={styles.bubble}>
        {content.length > 0 ? (
          <div className={styles.content}>{content}</div>
        ) : null}
        {showFooter ? (
          <div className={styles.footer}>
            {time != null ? <span className={styles.time}>{time}</span> : null}
            {showStatus ? (
              status === ChatMessageStatus.Read ? (
                <CheckCheck
                  className={classNames(styles.status, styles.statusRead)}
                  strokeWidth={1.75}
                  aria-label='Read'
                />
              ) : (
                <Check
                  className={classNames(styles.status, styles.statusSend)}
                  strokeWidth={1.75}
                  aria-label='Sent'
                />
              )
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
