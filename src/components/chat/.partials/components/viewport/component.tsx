'use client';

import { ChatViewportProps } from '@/components/chat/.partials/components/viewport/component.interface';
import {
  CHAT_VIEWPORT_DEFAULT_HAS_MORE,
  CHAT_VIEWPORT_DEFAULT_IS_LOADING,
} from '@/components/chat/.partials/constants/component.constants';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

const BOTTOM_THRESHOLD = 80;
const TOP_THRESHOLD = 64;

export function ChatViewport({
  onLoadMore,
  hasMore = CHAT_VIEWPORT_DEFAULT_HAS_MORE,
  isLoading = CHAT_VIEWPORT_DEFAULT_IS_LOADING,
  children,
  onScroll,
  className,
  tabIndex,
  'aria-label': ariaLabel,
  ...rest
}: ChatViewportProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollHeightRef = useRef(0);
  const isAtBottomRef = useRef(true);
  const loadMoreLockRef = useRef(false);

  const measureAtBottom = useCallback(() => {
    const element = scrollRef.current;

    if (!element) {
      return true;
    }

    const distance =
      element.scrollHeight - element.scrollTop - element.clientHeight;

    return distance <= BOTTOM_THRESHOLD;
  }, []);

  const syncScrollHeight = useCallback(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const previousHeight = scrollHeightRef.current;
    const nextHeight = element.scrollHeight;

    if (
      previousHeight &&
      nextHeight > previousHeight &&
      !isAtBottomRef.current
    ) {
      element.scrollTop += nextHeight - previousHeight;
    } else if (isAtBottomRef.current) {
      element.scrollTop = nextHeight;
    }

    scrollHeightRef.current = nextHeight;
  }, []);

  useLayoutEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    element.scrollTop = element.scrollHeight;
    scrollHeightRef.current = element.scrollHeight;
    isAtBottomRef.current = true;
  }, []);

  useLayoutEffect(() => {
    syncScrollHeight();
  }, [children, isLoading, syncScrollHeight]);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element || typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver(() => {
      syncScrollHeight();
    });

    for (const child of Array.from(element.children)) {
      observer.observe(child);
    }

    return () => {
      observer.disconnect();
    };
  }, [children, syncScrollHeight]);

  useEffect(() => {
    if (!isLoading) {
      loadMoreLockRef.current = false;
    }
  }, [isLoading]);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      onScroll?.(event);

      const element = scrollRef.current;

      if (!element) {
        return;
      }

      isAtBottomRef.current = measureAtBottom();

      if (
        element.scrollTop <= TOP_THRESHOLD &&
        hasMore &&
        !isLoading &&
        !loadMoreLockRef.current &&
        onLoadMore
      ) {
        loadMoreLockRef.current = true;
        void onLoadMore();
      }
    },
    [hasMore, isLoading, measureAtBottom, onLoadMore, onScroll],
  );

  return (
    <div
      {...rest}
      ref={scrollRef}
      tabIndex={tabIndex ?? 0}
      aria-label={ariaLabel ?? 'Conversation'}
      onScroll={handleScroll}
      className={classNames(
        'mosuk-chat-viewport',
        'group/chat-viewport',
        styles.viewport,
        className,
      )}
    >
      {children}
    </div>
  );
}
