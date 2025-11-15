import React, { useCallback, useEffect, useState } from 'react';
import { authService } from '../../services/auth/service';
import { Auth } from '../../services/auth/service.interface';
import { AuthContext } from './context/context';
import { AuthProviderProps } from './provider.interface';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth | null>(authService.read());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      const existingAuth = authService.read();

      if (existingAuth) {
        setAuth(existingAuth);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const create = useCallback((data: Auth) => {
    authService.create(data);
    setAuth(data);
  }, []);

  const update = useCallback((data: Auth) => {
    authService.update(data);
    setAuth(data);
  }, []);

  const deleteAuth = useCallback(() => {
    authService.delete();
    setAuth(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        create,
        update,
        delete: deleteAuth,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
