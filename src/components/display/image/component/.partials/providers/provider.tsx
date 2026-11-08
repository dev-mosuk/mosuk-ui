'use client';

import { ImageContext } from '@/components/display/image/component/.partials/providers/context/context';
import { ImageProviderProps } from '@/components/display/image/component/.partials/providers/provider.interface';
import { isNearViewport } from '@/components/display/image/component/.partials/services/scheduler';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ImagePhase = 'dots' | 'arm' | 'fade' | 'done';

const FADE_MS = 1125;

export function ImageProvider({
  isLoading = false,
  children,
}: ImageProviderProps) {
  const [phase, setPhase] = useState<ImagePhase>('dots');
  const [instant, setInstant] = useState(false);
  const node = useRef<HTMLElement | null>(null);

  const cover = useCallback(() => {
    setInstant(false);
    setPhase('dots');
  }, []);

  const reveal = useCallback(() => {
    const element = node.current;

    if (element && !isNearViewport(element)) {
      setInstant(true);
      setPhase((current) => (current === 'dots' ? 'done' : current));

      return;
    }

    setInstant(false);
    setPhase((current) => (current === 'dots' ? 'arm' : current));
  }, []);

  const finish = useCallback(() => {
    setPhase((current) => (current === 'fade' ? 'done' : current));
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      return;
    }

    setInstant(false);
    setPhase('dots');
  }, [isLoading]);

  useEffect(() => {
    if (phase !== 'arm') {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setPhase((current) => (current === 'arm' ? 'fade' : current));
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [phase]);

  useLayoutEffect(() => {
    if (phase !== 'fade') {
      return;
    }

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motion.matches) {
      setInstant(true);
      setPhase('done');
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== 'fade') {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPhase((current) => (current === 'fade' ? 'done' : current));
    }, FADE_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [phase]);

  const value = useMemo(
    () => ({
      shown: phase === 'fade' || (phase === 'done' && !instant),
      instant,
      isLoading,
      visibleDots: phase !== 'done',
      node,
      cover,
      reveal,
      finish,
    }),
    [cover, finish, instant, isLoading, phase, reveal],
  );

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
