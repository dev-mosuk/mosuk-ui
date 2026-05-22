import { Checkbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { useId } from 'react';
import styles from '../../styles/component.module.css';
import { CheckboxIndicatorProps } from './component.interface';

export function CheckboxIndicator({ ref, ...rest }: CheckboxIndicatorProps) {
  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <Checkbox.Indicator
      {...rest}
      className={classNames(
        'mosuk-checkbox-indicator',
        styles.indicator,
        rest?.className,
      )}
    >
      {rest?.children}
    </Checkbox.Indicator>
  );
}
