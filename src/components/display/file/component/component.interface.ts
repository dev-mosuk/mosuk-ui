import { LinkProps as NextLinkProps } from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

export interface FileContextProps {}

export type FileProps = HTMLAttributes<HTMLDivElement> & {};

export type FileLinkProps = NextLinkProps & {
  href: string;
  title?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  children: ReactNode;
};
