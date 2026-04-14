import classNames from 'classnames';
import React, { ElementType } from 'react';
import { HintTypeConstant } from './component.constants';
import { HintTypeEnum } from './component.enums';
import { HintProps } from './component.interface';
import styles from './component.module.css';

export function Hint<C extends ElementType = 'p'>({
  as,
  type,
  ...rest
}: HintProps<C>) {
  const Component = (as || 'p') as ElementType;

  const hintType = type ?? HintTypeEnum.INFO;
  const ComponentIcon = HintTypeConstant[hintType as HintTypeEnum]?.icon;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-hint',
        styles.hint,
        styles[hintType],
        rest.className,
      )}
    >
      <ComponentIcon />
      {rest?.children}
    </Component>
  );
}
