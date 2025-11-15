import { IconProps } from '../../component/component.interface';

export interface IconDeleteProps extends IconProps {
  alert?: {
    timeout?: number;
    message?: string;
  };
  onDelete?: () => void;
}