import { useTheme as BaseUseTheme } from '@/hooks/theme/.partials/hook';
import type { UseThemeProps } from '@/hooks/theme/.partials/hook.interface';
import { Theme } from '@/providers/theme/.partials/provider.enums';

export const useTheme = Object.assign(BaseUseTheme, {
  ENUMS: {
    Theme,
  },
});

export namespace useTheme {
  export type Props = UseThemeProps;
}

export { Theme };
export type { UseThemeProps };
