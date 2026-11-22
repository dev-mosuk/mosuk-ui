import { ScreenSize } from '@/hooks/screen-size/.partials/hook.enums';

export const SCREEN_SIZE_MIN_WIDTH: Record<ScreenSize, number> = {
  [ScreenSize.TwoXs]: 0,
  [ScreenSize.Xs]: 468,
  [ScreenSize.Sm]: 640,
  [ScreenSize.Md]: 768,
  [ScreenSize.Lg]: 1024,
  [ScreenSize.Xl]: 1280,
  [ScreenSize.TwoXl]: 1536,
};

export const SCREEN_SIZE_ORDER: ScreenSize[] = [
  ScreenSize.TwoXs,
  ScreenSize.Xs,
  ScreenSize.Sm,
  ScreenSize.Md,
  ScreenSize.Lg,
  ScreenSize.Xl,
  ScreenSize.TwoXl,
];
