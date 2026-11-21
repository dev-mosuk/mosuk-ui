import type { Image } from '@/components/image';

export type ChatMessageAvatarProps = Omit<Image.Props, 'children'> & {
  src?: string;
  alt?: string;
  fallback?: string;
};
