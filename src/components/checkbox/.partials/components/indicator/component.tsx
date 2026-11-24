import { CheckboxIndicatorProps } from '@/components/checkbox/.partials/components/indicator/component.interface';
import { CHECKBOX_INDICATOR_DEFAULT_KEEP_MOUNTED } from '@/components/checkbox/.partials/constants/component.constants';
import styles from '@/components/checkbox/.partials/styles/component.module.css';
import { Checkbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { useId } from 'react';

export function CheckboxIndicator({
  ref,
  keepMounted = CHECKBOX_INDICATOR_DEFAULT_KEEP_MOUNTED,
  id,
  className,
  children,
  ...rest
}: CheckboxIndicatorProps) {
  const generatedId = useId();

  return (
    <Checkbox.Indicator
      {...rest}
      ref={ref}
      id={id ?? generatedId}
      keepMounted={keepMounted}
      className={classNames(
        'mosuk-checkbox-indicator',
        styles.indicator,
        className,
      )}
    >
      {children}
    </Checkbox.Indicator>
  );
}
