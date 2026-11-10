import styles from '@/components/display/file/component.module.css';
import { imageExtensions } from '@/components/display/file/file/component.constant';
import { FileFileProps } from '@/components/display/file/file/component.interface';
import { Image } from '@/components/display/image';
import classNames from 'classnames';
import { File as FileIcon, FileMinus } from 'lucide-react';
import { AdobePdf } from 'mosuk-icons/shared/components/adobe/pdf';
import React from 'react';

export function FileFile({ src, alt, ...props }: FileFileProps) {
  if (!src) {
    return (
      <FileMinus
        {...props}
        className={(styles.file ?? '') + ' ' + (props?.className ?? '')}
      />
    );
  }

  if (imageExtensions.some((ext) => src.includes(ext))) {
    return (
      <Image>
        <Image.Dots />
        <Image.Image
          {...props}
          src={src}
          alt={alt || 'Изображение'}
          className={classNames(styles.image, props?.className)}
        />
      </Image>
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
