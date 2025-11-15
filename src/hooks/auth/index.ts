import { useAuth as BaseUseAuth } from './hook';
import { UseAuthProps } from './hook.interface';

export const useAuth = BaseUseAuth;

export namespace useAuth {
  export type Props = UseAuthProps;
}

