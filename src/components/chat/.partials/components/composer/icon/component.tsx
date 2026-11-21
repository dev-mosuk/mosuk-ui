'use client';

import { ChatComposerIconProps } from '@/components/chat/.partials/components/composer/icon/component.interface';
import { useChat } from '@/components/chat/.partials/hooks/hook';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames';
import React from 'react';

export function ChatComposerIcon<C = 'button'>({
  ...rest
}: ChatComposerIconProps<C>) {
  const { disabled } = useChat();

  return (
    <Button
      {...rest}
      as={(rest.as ?? 'button') as C}
      width={rest.width ?? Button.ENUMS.Width.Square}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
      isDisabled={rest.isDisabled ?? disabled}
      className={classNames(
        'mosuk-chat-composer-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
