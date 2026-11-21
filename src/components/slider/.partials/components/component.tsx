import { SliderProps } from '@/components/slider/.partials/components/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider as BaseSlider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function Slider({ thumbAlignment = 'edge', ...rest }: SliderProps) {
  return (
    <BaseSlider.Root
      {...rest}
      thumbAlignment={thumbAlignment}
      className={classNames(
        'mosuk-slider',
        '@container/slider',
        'group/slider',
        styles.root,
        rest?.className,
      )}
    />
  );
}
