export type FileLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export type FileContextProps = {
  status: FileLoadStatus;
  setStatus: (status: FileLoadStatus) => void;
  src: string | null;
  setSrc: (src: string | null) => void;
  name: string | null;
  extension: string | null;
};
