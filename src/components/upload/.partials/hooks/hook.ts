import { UseUploadProps } from '@/components/upload/.partials/hooks/hook.interface';
import { UploadContext } from '@/components/upload/.partials/providers/context/context';
import { useContext } from 'react';

export function useUpload(): UseUploadProps {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('useUpload must be used within <Upload>');
  }

  return {
    ...context,
  };
}
