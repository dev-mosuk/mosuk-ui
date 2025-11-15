export interface ApiServiceInterface {
  get<T>(endpoint: string, config?: ApiServiceConfig): Promise<T>;
  post<T>(endpoint: string, data?: any, config?: ApiServiceConfig): Promise<T>;
  put<T>(endpoint: string, data?: any, config?: ApiServiceConfig): Promise<T>;
  patch<T>(endpoint: string, data?: any, config?: ApiServiceConfig): Promise<T>;
  delete<T>(endpoint: string, config?: ApiServiceConfig): Promise<T>;
}

export interface ApiServiceConfig {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  cache?: RequestCache;
  params?: Record<string, any>;
}

export interface ApiErrorsInterface {
  status: number;
  errors: {
    [key: string]: {
      message: string;
    };
  };
}
