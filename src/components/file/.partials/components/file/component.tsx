import { imageExtensions } from '@/components/file/.partials/components/file/component.constant';
import { FileFileProps } from '@/components/file/.partials/components/file/component.interface';
import styles from '@/components/file/.partials/styles/component.module.css';
import { Image } from '@/components/image';
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
