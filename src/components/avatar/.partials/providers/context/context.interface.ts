export type AvatarLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export type AvatarContextProps = {
  status: AvatarLoadStatus;
  setStatus: (status: AvatarLoadStatus) => void;
};
