import { File as FileIcon, FileMinus } from 'lucide-react';
import { AdobePdf } from 'mosuk-icons/shared/components/adobe/pdf';
import React from 'react';
import { Image } from '../../../image/component/components/component';
import styles from '../component.module.css';
import { imageExtensions } from './component.constant';
import { FileFileProps } from './component.interface';

export function FileFile({ src, alt, ...props }: FileFileProps) {
  if (!src)
    return (
      <FileMinus
        {...props}
        className={(styles.file ?? '') + ' ' + (props?.className ?? '')}
      />
    );

  if (imageExtensions.some((ext) => src.includes(ext))) {
    return (
      <Image
        {...props}
        src={src}
        alt={alt || 'Изображение'}
        className={(styles.image ?? '') + ' ' + (props?.className ?? '')}
      />
    );
  }

  if (src.toLowerCase().includes('.pdf')) {
    return (
      <AdobePdf
        {...props}
        alt={alt || 'PDF'}
        className={(styles.file ?? '') + ' ' + (props?.className ?? '')}
      />
    );
  }

  return (
    <FileIcon
      {...props}
      className={(styles.file ?? '') + ' ' + (props?.className ?? '')}
    />
  );
}
