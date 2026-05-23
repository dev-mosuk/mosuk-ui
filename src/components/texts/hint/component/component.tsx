import { HintTypeConstant } from '@/components/texts/hint/component/component.constants';
import { HintTypeEnum } from '@/components/texts/hint/component/component.enums';
import { HintProps } from '@/components/texts/hint/component/component.interface';
import styles from '@/components/texts/hint/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
