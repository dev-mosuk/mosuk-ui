import { ButtonProps } from '../../component/component.interface';

export interface ButtonDeleteProps extends ButtonProps {
  danger?: IconDeleteDangerProps;
  onDanger?: () => void;
  onDelete?: () => void;
}

interface IconDeleteDangerProps {
  timer: number;
  title: string;
  className: string;
}
