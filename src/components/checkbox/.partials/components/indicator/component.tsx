import { CheckboxIndicatorProps } from '@/components/checkbox/.partials/components/indicator/component.interface';
import styles from '@/components/checkbox/.partials/styles/component.module.css';
import { Checkbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { useId } from 'react';

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
