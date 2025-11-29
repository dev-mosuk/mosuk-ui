import { LabelHTMLAttributes, RefObject } from 'react';

export interface UploadFilesLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  ref?: RefObject<HTMLLabelElement | null>;
}
