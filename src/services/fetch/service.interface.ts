export interface FetchServiceInterface {
  get<T>(config: FetchServiceConfig): Promise<T>;
  post<T>(config: FetchServiceConfig): Promise<T>;
  put<T>(config: FetchServiceConfig): Promise<T>;
  patch<T>(config: FetchServiceConfig): Promise<T>;
  delete<T>(config: FetchServiceConfig): Promise<T>;
}

export interface FetchServiceConfig {
  headers?: Record<string, string>;
  url: string;
  type?: 'json' | 'formData';
  token?: string;
  params?: Record<string, any>;
  body?: any;
  cache?: RequestCache;
  credentials?: RequestCredentials;
}

export interface FetchErrorsInterface {
  status: number;
  errors: {
    [key: string]: {
      message: string;
    };
  };
}
