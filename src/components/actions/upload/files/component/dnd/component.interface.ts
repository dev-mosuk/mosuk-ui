import { HTMLAttributes, RefObject } from 'react';

export interface UploadFilesDndProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
}