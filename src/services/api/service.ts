import { alertsService } from '../alerts/service';
import { authService } from '../auth/service';
import { ApiServiceConfig, ApiServiceInterface } from './service.interface';

export class ApiService implements ApiServiceInterface {
  private static instance: ApiService;
  private static url = process.env.NEXT_PUBLIC_API_URL;

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  private async sendRequest<T>(
    endpoint: string,
    config: ApiServiceConfig = {}
  ): Promise<T> {
    try {
      let url = ApiService.url + endpoint;

      const headers: Record<string, string> = {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(config.headers || {}),
      };

      const auth = authService.read();
      const token = auth?.token;

      if (token) headers['Authorization'] = `Bearer ${token}`;

      if (config.params) {
        const searchParams = new URLSearchParams();

        Object.entries(config.params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
              value.forEach((item) => searchParams.append(key, String(item)));
            } else {
              searchParams.append(key, String(value));
            }
          }
        });

        const queryString = searchParams.toString();
        
        if (queryString) {
          url += `?${queryString}`;
        }
      }

      const body = config.body ? JSON.stringify(config.body) : undefined;

      const response = await fetch(url, {
        method: config.method || 'GET',
        headers,
        body,
        credentials: 'include',
        cache: config.cache,
      });

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

      if (!response.ok) {
  
        if (response.status === 403) {
          alertsService.error(
            'Недостаточно прав для выполнения данного действия'
          );
        }

        throw {
          status: response.status,
          ...data,
        };
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async get<T>(
    endpoint: string, 
    config?: ApiServiceConfig
  ): Promise<T> {
    return this.sendRequest<T>(endpoint, { 
      ...config, 
      method: 'GET' 
    });
  }

  async post<T>(
    endpoint: string,
    data?: any,
    config?: ApiServiceConfig
  ): Promise<T> {
    return this.sendRequest<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data,
    });
  }

  async put<T>(
    endpoint: string,
    data?: any,
    config?: ApiServiceConfig
  ): Promise<T> {
    return this.sendRequest<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data,
    });
  }

  async patch<T>(
    endpoint: string,
    data?: any,
    config?: ApiServiceConfig
  ): Promise<T> {
    return this.sendRequest<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data,
    });
  }

  async delete<T>(
    endpoint: string, 
    config?: ApiServiceConfig
  ): Promise<T> {
    return this.sendRequest<T>(endpoint, { 
      ...config, 
      method: 'DELETE' 
    });
  }
}
