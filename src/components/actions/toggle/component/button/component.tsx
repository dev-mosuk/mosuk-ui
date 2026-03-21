import classNames from 'classnames';
import React, { ElementType, useCallback } from 'react';
import { Button } from '../../../button/component/component';
import styles from '../component.module.css';
import { useToggle } from '../hooks/hook';
import { ToggleButtonProps } from './component.props';

export function ToggleButton<C extends ElementType = 'button'>({
  as,
  value,
  ...rest
}: ToggleButtonProps<C>) {
  const Component = (as || 'button') as ElementType;
  const { value: activeValue, onChange, registerOption } = useToggle();

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      const ref = rest?.ref;
      registerOption(value, el);

      if (typeof ref === 'function') {
        ref(el as any);
      } else if (ref && typeof ref === 'object') {
        (ref as { current: any }).current = el;
      }
    },
    [registerOption, value],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onChange(value);
      rest?.onClick?.(e);
    },
    [onChange, value, rest?.onClick],
  );

  const active = value === activeValue;

  return (
    <Button
      {...rest}
      as={Component}
      ref={setRef}
      type={rest?.type || 'button'}
      onClick={handleClick}
      data-value={value}
      className={classNames(
        'mosuk-toggle-button',
        styles.button,
        {
          [styles.active]: active,
        },
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
