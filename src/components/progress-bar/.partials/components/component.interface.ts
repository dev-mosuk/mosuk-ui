import type { ProgressBarVariant } from '@/components/progress-bar/.partials/enums/component.enums';
import type { CSSProperties, HTMLAttributes } from 'react';

type ProgressBarOwnProps = {
  size?: number;
  variant?: ProgressBarVariant | `${ProgressBarVariant}`;
  value?: number;
  min?: number;
  max?: number;
  isLoading?: boolean;
  style?: CSSProperties;
};

export type ProgressBarProps = ProgressBarOwnProps &
  Omit<HTMLAttributes<HTMLDataElement>, 'value' | 'style'>;