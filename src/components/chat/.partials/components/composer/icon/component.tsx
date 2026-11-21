'use client';

import { ChatComposerIconProps } from '@/components/chat/.partials/components/composer/icon/component.interface';
import { useChat } from '@/components/chat/.partials/hooks/hook';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { Icon } from '@/components/icon';
import classNames from 'classnames';
import React from 'react';

export function ChatComposerIcon<C = 'button'>({
  ...rest
}: ChatComposerIconProps<C>) {
  const { disabled } = useChat();

  return (
    <Icon
      {...rest}
      as={(rest.as ?? 'button') as C}
      variant={rest.variant ?? Icon.ENUMS.Variant.Ghost}
      press={rest.press ?? Icon.ENUMS.Press.None}
      isDisabled={rest.isDisabled ?? disabled}
      className={classNames(
        'mosuk-chat-composer-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Icon>
  );
}
