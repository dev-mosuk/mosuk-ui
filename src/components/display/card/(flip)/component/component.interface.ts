import { CardProps } from '../../component/component.interface';

export interface CardFlipProps extends CardProps {
  flip?: boolean;
  onFlip?: () => void;
}
  