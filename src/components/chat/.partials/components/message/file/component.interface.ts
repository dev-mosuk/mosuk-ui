import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ChatMessageFileSharedProps = {
  name: string;
  size?: number;
  href?: string;
};

export type ChatMessageFileProps = ChatMessageFileSharedProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );
