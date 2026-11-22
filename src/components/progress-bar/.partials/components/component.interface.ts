import type { ProgressBarColor } from '@/components/progress-bar/.partials/enums/component.enums';
import type { CSSProperties, HTMLAttributes } from 'react';

type ProgressBarOwnProps = {
  size?: number;
  color?: ProgressBarColor | `${ProgressBarColor}`;
  isLoading?: boolean;
  value?: number;
  min?: number;
  max?: number;
  style?: CSSProperties;
};

export type ProgressBarProps = ProgressBarOwnProps &
  Omit<HTMLAttributes<HTMLDataElement>, 'color' | 'value' | 'style'>;
