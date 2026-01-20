import { InputHTMLAttributes, Ref } from 'react';

export interface UploadInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  ref?: Ref<any>;
  cdn: {
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';    
    url: string;
    token: string;
  };
  value?: any[];
  onChange: (files: any[]) => void;
  onLoadingChange?: (loading: boolean) => void;
}
