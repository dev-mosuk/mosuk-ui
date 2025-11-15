import { createContext } from 'react';
import { AuthContextProps } from './context.interface';

export const AuthContext = createContext<AuthContextProps | null>(null);
