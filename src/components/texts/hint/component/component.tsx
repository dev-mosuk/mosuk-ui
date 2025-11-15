import classNames from 'classnames';
import React from 'react';
import { HintTypeConstant } from './component.constants';
import { HintTypeEnum } from './component.enums';
import { HintProps } from './component.interface';
import styles from './component.module.css';

export function Hint({ as, type, ...props }: HintProps) {
  const hintType = type ?? HintTypeEnum.INFO;

  const Component = as ?? 'p';
  const ComponentIcon = HintTypeConstant[hintType as HintTypeEnum]?.icon;

  if (!props?.children) {
    return undefined;
  }

  return (
    <Component
      {...(props as any)}
      className={classNames('mosuk-hint', styles.hint, styles[hintType], props.className)}
    >
      <ComponentIcon />
      {props?.children}
    </Component>
  );
}
