import { useContext } from 'react';
import { UploadContext } from '../providers/context/context';
import { useUploadProps } from './hook.interface';

export function useUpload(): useUploadProps {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('useUpload must be used within <UploadContext>');
  }

  return {
    ...context,
  };
}
