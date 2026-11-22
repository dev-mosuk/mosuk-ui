import { useToasts as BaseUseToasts } from '@/hooks/toasts/.partials/hook';
import type { UseToastsProps } from '@/hooks/toasts/.partials/hook.interface';

export const useToasts = BaseUseToasts;

export namespace useToasts {
  export type Props = UseToastsProps;
}
