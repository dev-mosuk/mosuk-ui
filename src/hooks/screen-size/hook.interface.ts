import { ScreenSize } from '@/hooks/screen-size/hook.enums';

export interface UseScreenSizeProps {
  size: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
