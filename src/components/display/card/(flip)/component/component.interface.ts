import { CardProps } from '@/components/display/card/component/component.interface';

export interface CardFlipProps extends CardProps {
  flip?: boolean;
  onFlip?: () => void;
}
