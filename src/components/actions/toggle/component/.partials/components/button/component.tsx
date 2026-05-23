import { Button } from '@/components/actions/button/component/component';
import { ToggleButtonProps } from '@/components/actions/toggle/component/.partials/components/button/component.props';
import { useToggle } from '@/components/actions/toggle/component/.partials/hooks/hook';
import styles from '@/components/actions/toggle/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useCallback } from 'react';

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
