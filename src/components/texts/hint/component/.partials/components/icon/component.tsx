import { HintTypeConstant } from '@/components/texts/hint/component/.partials/component.constants';
import { HintTypeEnum } from '@/components/texts/hint/component/.partials/component.enums';
import { HintIconProps } from '@/components/texts/hint/component/.partials/components/icon/component.interface';
import { HintContext } from '@/components/texts/hint/component/.partials/context/context';
import styles from '@/components/texts/hint/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';

export function HintIcon<C extends ElementType = 'span'>({
  as,
  children,
  ...rest
}: HintIconProps<C>) {
  const context = useContext(HintContext);
  const hintType = context?.type ?? HintTypeEnum.INFO;
  const DefaultIcon = HintTypeConstant[hintType]?.icon;

  if (children) {
    const Component = (as || 'span') as ElementType;

    return (
      <Component
        {...rest}
        className={classNames(
          'mosuk-hint-icon',
          styles.icon,
          rest.className,
        )}
      >
        {children}
      </Component>
    );
  }

  if (!DefaultIcon) {
    return null;
  }

  return (
    <DefaultIcon
      {...rest}
      className={classNames('mosuk-hint-icon', styles.icon, rest.className)}
    />
  );
}
