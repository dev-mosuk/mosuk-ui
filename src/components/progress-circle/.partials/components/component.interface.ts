import type { ProgressCircleVariant } from '@/components/progress-circle/.partials/enums/component.enums';
import type { CSSProperties, HTMLAttributes } from 'react';

type ProgressCircleOwnProps = {
  size?: number;
  stroke?: number;
  variant?: ProgressCircleVariant | `${ProgressCircleVariant}`;
  value?: number;
  min?: number;
  max?: number;
  isLoading?: boolean;
  style?: CSSProperties;
};

export type ProgressCircleProps = ProgressCircleOwnProps &
  Omit<HTMLAttributes<HTMLDataElement>, 'value' | 'style'>;