import { useUploadProps } from '@/components/actions/upload/hooks/hook.interface';
import { UploadContext } from '@/components/actions/upload/providers/context/context';
import { useContext } from 'react';

export function useUpload(): useUploadProps {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('useUpload must be used within <UploadContext>');
  }

  return {
    ...context,
  };
}
