import { CardFlipProps } from '@/components/display/card/(flip)/component/component.interface';
import styles from '@/components/display/card/(flip)/component/component.module.css';
import { Card } from '@/components/display/card/component/component';
import classNames from 'classnames';
import React from 'react';

export function CardFlip({ as, ref, flip, onFlip, ...rest }: CardFlipProps) {
  const handleFlip = (e: React.MouseEvent<HTMLElement>) => {
    if (onFlip) {
      onFlip();
    }

    if (rest?.onClick) {
      (rest.onClick as (e: React.MouseEvent<HTMLElement>) => void)(e);
    }
  };

  return (
    <Card
      {...rest}
      as={as}
      ref={ref}
      onClick={handleFlip}
      className={classNames('mosuk-card', styles.card, rest?.className, {
        [styles.flip]: flip,
      })}
    >
      {rest?.children}
    </Card>
  );
}
