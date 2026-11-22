import { useScreenSize as BaseUseScreenSize } from '@/hooks/screen-size/.partials/hook';
import { ScreenSize } from '@/hooks/screen-size/.partials/hook.enums';
import type { UseScreenSizeProps } from '@/hooks/screen-size/.partials/hook.interface';

export const useScreenSize = Object.assign(BaseUseScreenSize, {
  ENUMS: {
    Size: ScreenSize,
  },
});

export namespace useScreenSize {
  export type Props = UseScreenSizeProps;
}

export { ScreenSize };
export type { UseScreenSizeProps };
