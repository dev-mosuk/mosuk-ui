import { Button } from '@/components/button';
import { SegmentButtonProps } from '@/components/segment/.partials/components/button/component.interface';
import { SEGMENT_DEFAULT_SIZE } from '@/components/segment/.partials/constants/component.constants';
import { useSegment } from '@/components/segment/.partials/hooks/hook';
import styles from '@/components/segment/.partials/styles/component.module.css';
import { Tabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';

export function SegmentButton<C = 'button'>({
  value,
  isDisabled,
  className,
  ...rest
}: SegmentButtonProps<C>) {
  const { size: segmentSize } = useSegment();
  const nativeButton = !rest.as || rest.as === 'button';

  return (
    <Tabs.Tab
      value={value}
      disabled={isDisabled}
      nativeButton={nativeButton}
      data-value={value}
      className={classNames('mosuk-segment-button', styles.button, className)}
      render={
        <Button
          {...(rest as Button.Props<C>)}
          as={(rest.as ?? 'button') as C}
          size={segmentSize ?? rest.size ?? SEGMENT_DEFAULT_SIZE}
          variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
          press={rest.press ?? Button.ENUMS.Press.None}
          isDisabled={isDisabled}
        />
      }
    />
  );
}
