import { FieldsetHTMLAttributes, RefObject } from 'react';

export interface CdnInterface {
  token: string;
  url: string;
  endpoint: string;
}

export interface BaseFileInterface {
  src: string;
  name: string;
}

export interface FileInterface extends BaseFileInterface {
  id: string;
  position: number;
  error?: string;
  isLoading?: boolean;
}

export type GenericFileInterface<T extends BaseFileInterface> = T & {
  error?: string;
  isLoading?: boolean;
}

export interface CdnFileInterface {
  src: string;
  filename: string; 
  error: string | null;
}

export interface InputFilesContextProps {
  id: string | null;
  setId: (id: string) => void;

  cdn: CdnInterface;

  files: any[];
  setFiles: (files: any[]) => void;

  draggedId: string | null;
  setDraggedId: (id: string | null) => void;
}

export interface InputFilesProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  ref?: RefObject<HTMLFieldSetElement | null>;

  cdn: CdnInterface;

  value?: any[];
  onChange?: (files: any[]) => void;
}
