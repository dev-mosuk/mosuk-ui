import { IconProps } from '../../component/component.interface';

export interface IconDeleteProps extends IconProps {
  danger?: IconDeleteDangerProps;
  onDanger?: () => void;
  onDelete?: () => void;
}

interface IconDeleteDangerProps {
  timer: number;
  title: string;
  className: string;
}