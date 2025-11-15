import { IconProps } from '../../../../actions/icon/component/component.interface';

export interface IconDeleteProps extends IconProps {
  alert?: {
    timeout?: number;
    message?: string;
  };
  onDelete?: () => void;
}