import type { ScreenSize } from '@/hooks/screen-size/.partials/hook.enums';

export interface UseScreenSizeProps {
  size: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
