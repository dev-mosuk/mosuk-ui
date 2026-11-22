import type { ProgressCircleColor } from '@/components/progress-circle/.partials/enums/component.enums';
import type { CSSProperties, HTMLAttributes } from 'react';

type ProgressCircleOwnProps = {
  size?: number;
  color?: ProgressCircleColor | `${ProgressCircleColor}`;
  isLoading?: boolean;
  value?: number;
  min?: number;
  max?: number;
  style?: CSSProperties;
};

export type ProgressCircleProps = ProgressCircleOwnProps &
  Omit<HTMLAttributes<HTMLDataElement>, 'color' | 'value' | 'style'>;
