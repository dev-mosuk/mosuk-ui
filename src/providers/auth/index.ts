import { createElement } from 'react';
import { AuthProvider as BaseAuthProvider } from './provider';
import { AuthProviderProps } from './provider.interface';

export const AuthProvider = (props: AuthProviderProps) => {
  return createElement(BaseAuthProvider, props);
};

export namespace AuthProvider {
  export type Props = AuthProviderProps;
}

