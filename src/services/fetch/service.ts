import { FetchServiceConfig, FetchServiceInterface } from './service.interface';

export class FetchService implements FetchServiceInterface {
  private static instance: FetchService;

  public static getInstance(): FetchService {
    if (!FetchService.instance) {
      FetchService.instance = new FetchService();
    }

    return FetchService.instance;
  }

  private async sendRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    config: FetchServiceConfig
  ): Promise<T> {
    try {
      let url = config.url;
      const type = config.type ?? 'json';

      const headers: Record<string, string> = {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        ...(config.headers || {}),
      };

      if (config.token) {
        headers['Authorization'] = `Bearer ${config.token}`;
      }

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

      let body: BodyInit | undefined = undefined;

      if (config.body !== undefined && config.body !== null) {
        if (type === 'formData') {
          body = config.body as BodyInit;
        } else {
          headers['Content-Type'] = 'application/json';
          body = JSON.stringify(config.body);
        }
      } else if (type === 'json') {
        headers['Content-Type'] = 'application/json';
      }

      if (type === 'formData') {
        delete headers['Content-Type'];
      }

      const response = await fetch(url, {
        method,
        headers,
        body,
        credentials: config.credentials,
        cache: config.cache,
      });

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

      if (!response.ok) {
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

  async get<T>(config: FetchServiceConfig): Promise<T> {
    return this.sendRequest<T>('GET', config);
  }

  async post<T>(config: FetchServiceConfig): Promise<T> {
    return this.sendRequest<T>('POST', config);
  }

  async put<T>(config: FetchServiceConfig): Promise<T> {
    return this.sendRequest<T>('PUT', config);
  }

  async patch<T>(config: FetchServiceConfig): Promise<T> {
    return this.sendRequest<T>('PATCH', config);
  }

  async delete<T>(config: FetchServiceConfig): Promise<T> {
    return this.sendRequest<T>('DELETE', config);
  }
}
