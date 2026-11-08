import { HintTypeEnum } from '@/components/texts/hint/component/.partials/component.enums';
import { HintProps } from '@/components/texts/hint/component/.partials/components/component.interface';
import { HintContext } from '@/components/texts/hint/component/.partials/context/context';
import styles from '@/components/texts/hint/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Hint<C extends ElementType = 'p'>({
  as,
  type,
  ...rest
}: HintProps<C>) {
  const Component = (as || 'p') as ElementType;
  const hintType = type ?? HintTypeEnum.INFO;

  return (
    <HintContext.Provider value={{ type: hintType }}>
      <Component
        {...rest}
        className={classNames(
          'mosuk-hint',
          styles.hint,
          styles[hintType],
          rest.className,
        )}
      />
    </HintContext.Provider>
  );
}
