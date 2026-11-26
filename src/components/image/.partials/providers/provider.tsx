'use client';

import { IMAGE_DEFAULT_IS_LOADING } from '@/components/image/.partials/constants/component.constants';
import { ImageContext } from '@/components/image/.partials/providers/context/context';
import type { ImageLoadStatus } from '@/components/image/.partials/providers/context/context.interface';
import { ImageProviderProps } from '@/components/image/.partials/providers/provider.interface';
import { isNearViewport } from '@/components/image/.partials/services/scheduler';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ImagePhase = 'loading' | 'fade' | 'done';

const LOADER_EXIT_MS = 1050;

export function ImageProvider({
  isLoading = IMAGE_DEFAULT_IS_LOADING,
  children,
}: ImageProviderProps) {
  const [phase, setPhase] = useState<ImagePhase>('loading');
  const [instant, setInstant] = useState(false);
  const [status, setStatus] = useState<ImageLoadStatus>('idle');
  const node = useRef<HTMLElement | null>(null);

  const cover = useCallback(() => {
    setInstant(false);
    setPhase('loading');
  }, []);

  const reveal = useCallback(() => {
    const element = node.current;

    if (element && !isNearViewport(element)) {
      setInstant(true);
      setPhase('done');

      return;
    }

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motion.matches) {
      setInstant(true);
      setPhase('done');

      return;
    }

    setInstant(false);
    setPhase((current) => (current === 'loading' ? 'fade' : current));
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      return;
    }

    setInstant(false);
    setPhase('loading');
  }, [isLoading]);

  useEffect(() => {
    if (phase !== 'fade') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPhase((current) => (current === 'fade' ? 'done' : current));
    }, LOADER_EXIT_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [phase]);

  const value = useMemo(
    () => ({
      shown: phase === 'fade' || (phase === 'done' && !instant),
      instant,
      isLoading,
      visibleLoader: phase === 'loading' || phase === 'fade' || isLoading,
      status,
      setStatus,
      node,
      cover,
      reveal,
    }),
    [cover, instant, isLoading, phase, reveal, status],
  );

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
