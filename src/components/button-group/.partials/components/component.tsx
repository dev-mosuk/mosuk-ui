import type { ButtonGroupProps } from '@/components/button-group/.partials/components/component.interface';
import { ButtonGroupSeparator } from '@/components/button-group/.partials/components/separator/component';
import {
  BUTTON_GROUP_DEFAULT_IS_DETACHED,
  BUTTON_GROUP_DEFAULT_ORIENTATION,
  BUTTON_GROUP_DEFAULT_SIZE,
} from '@/components/button-group/.partials/constants/component.constants';
import styles from '@/components/button-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';

type InheritProps = {
  size?: ButtonGroupProps['size'];
  variant?: ButtonGroupProps['variant'];
  isDisabled?: boolean;
};

export function ButtonGroup({
  variant,
  size = BUTTON_GROUP_DEFAULT_SIZE,
  isDisabled,
  isDetached = BUTTON_GROUP_DEFAULT_IS_DETACHED,
  orientation = BUTTON_GROUP_DEFAULT_ORIENTATION,
  className,
  children,
  ...rest
}: ButtonGroupProps) {
  const childSize = Math.max(1, size - 1);

  const wrappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type === ButtonGroupSeparator) {
      return child;
    }

    const props = child.props as InheritProps;

    return cloneElement(child as ReactElement<InheritProps>, {
      size: childSize,
      ...(props.variant == null ? { variant } : null),
      ...(props.isDisabled == null ? { isDisabled } : null),
    });
  });

  return (
    <div
      {...rest}
      role='group'
      data-orientation={orientation}
      data-variant={variant || undefined}
      data-detached={isDetached || undefined}
      className={classNames(
        'mosuk-button-group',
        '@container/button-group',
        'group/button-group',
        styles.buttonGroup,
        className,
      )}
    >
      {wrappedChildren}
    </div>
  );
}
