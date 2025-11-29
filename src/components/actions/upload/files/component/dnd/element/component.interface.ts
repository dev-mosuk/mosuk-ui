import { HTMLAttributes, RefObject } from 'react';

export interface UploadFilesDndElementProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
  file?: any;
}
