export interface YandexMetrikaContextProps {
  ym: ((...args: any[]) => void) | null;
  id: string | null;
  isLoading: boolean;
}
