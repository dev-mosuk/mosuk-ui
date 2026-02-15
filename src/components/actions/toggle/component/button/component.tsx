import classNames from 'classnames';
import React, { ElementType, useCallback, useContext } from 'react';
import { Button } from '../../../button/component/component';
import styles from '../component.module.css';
import { ToggleContext } from '../provider/context/context';
import { ToggleButtonProps } from './component.props';

export function ToggleButton<C extends ElementType = 'button'>({
  as,
  value,
  onClick,
  ...rest
}: ToggleButtonProps<C>) {
  const Component = (as || 'button') as ElementType;

  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('ToggleButton must be used within ToggleProvider');
  }

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      const ref = rest?.ref;
      context?.registerOption(value, el);

      if (typeof ref === 'function') {
        ref(el as any);
      } else if (ref && typeof ref === 'object') {
        (ref as { current: any }).current = el;
      }
    },
    [context, value],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      context?.onChange(value);
      onClick?.(e);
    },

    [context, value, onClick],
  );

  return (
    <Button
      {...rest}
      as={Component}
      ref={setRef}
      type={rest?.type || 'button'}
      data-active={value === context?.value}
      onClick={handleClick}
      className={classNames(
        'mosuk-toggle-button',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
