import type { ButtonGroupProps } from '@/components/button-group/.partials/components/component.interface';
import { ButtonGroupSeparator } from '@/components/button-group/.partials/components/separator/component';
import {
  BUTTON_GROUP_DEFAULT_ORIENTATION,
  BUTTON_GROUP_DEFAULT_WIDTH,
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
  size,
  width = BUTTON_GROUP_DEFAULT_WIDTH,
  isDisabled,
  orientation = BUTTON_GROUP_DEFAULT_ORIENTATION,
  className,
  children,
  ...rest
}: ButtonGroupProps) {
  const wrappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type === ButtonGroupSeparator) {
      return child;
    }

    const props = child.props as InheritProps;

    return cloneElement(child as ReactElement<InheritProps>, {
      size: props.size ?? size,
      variant: props.variant ?? variant,
      isDisabled: props.isDisabled ?? isDisabled,
    });
  });

  return (
    <div
      {...rest}
      role='group'
      data-orientation={orientation}
      data-variant={variant || undefined}
      data-width={width}
      className={classNames(
        'mosuk-button-group',
        '@container/button-group',
        'group/button-group',
        styles.root,
        className,
      )}
    >
      {wrappedChildren}
    </div>
  );
}
