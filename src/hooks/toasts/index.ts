import { useToasts as BaseUseToasts } from './hook.js';
import { UseToastsProps } from './hook.interface.js';

export const useToasts = BaseUseToasts;

export namespace useToasts {
  export type Props = UseToastsProps;
}
