'use client';

import { AccordionContentProps } from '@/components/accordion/.partials/components/content/component.interface';
import {
  ACCORDION_CONTENT_DEFAULT_IS_SHADOW,
  ACCORDION_CONTENT_DEFAULT_VARIANT,
} from '@/components/accordion/.partials/constants/component.constants';
import styles from '@/components/accordion/.partials/styles/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

export function AccordionContent({
  isShadow = ACCORDION_CONTENT_DEFAULT_IS_SHADOW,
  variant = ACCORDION_CONTENT_DEFAULT_VARIANT,
  onTransitionStart,
  onTransitionEnd,
  onTransitionCancel,
  ...rest
}: AccordionContentProps) {
  const [isShadowActive, setIsShadowActive] = useState(false);

  const activateShadow = useCallback(() => {
    if (!isShadow) {
      return;
    }
    setIsShadowActive(true);
  }, [isShadow]);

  const deactivateShadow = useCallback(() => {
    setIsShadowActive(false);
  }, []);

  return (
    <BaseAccordion.Panel
      {...rest}
      data-variant={variant}
      data-shadow={isShadow ? 'true' : undefined}
      data-shadow-active={isShadow && isShadowActive ? 'true' : undefined}
      onTransitionStart={(event) => {
        activateShadow();
        onTransitionStart?.(event);
      }}
      onTransitionEnd={(event) => {
        deactivateShadow();
        onTransitionEnd?.(event);
      }}
      onTransitionCancel={(event) => {
        deactivateShadow();
        onTransitionCancel?.(event);
      }}
      className={classNames(
        'mosuk-accordion-item-content',
        styles.content,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Panel>
  );
}
