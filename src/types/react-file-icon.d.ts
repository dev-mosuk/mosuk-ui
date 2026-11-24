declare module 'react-file-icon' {
  import type { ComponentType, CSSProperties } from 'react';

  export type FileIconProps = {
    extension?: string;
    type?: string;
    color?: string;
    fold?: boolean;
    foldColor?: string;
    glyphColor?: string;
    gradientColor?: string;
    gradientOpacity?: number;
    labelColor?: string;
    labelTextColor?: string;
    labelUppercase?: boolean;
    radius?: number;
    width?: number | string;
    height?: number | string;
    style?: CSSProperties;
    className?: string;
  };

  export const FileIcon: ComponentType<FileIconProps>;
  export const defaultStyles: Record<string, Partial<FileIconProps>>;
}
