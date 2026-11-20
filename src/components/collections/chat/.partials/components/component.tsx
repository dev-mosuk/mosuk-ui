'use client';

import { ChatProps } from '@/components/collections/chat/.partials/components/component.interface';
import { ChatComposer } from '@/components/collections/chat/.partials/components/composer/component';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from 'react';

const BOTTOM_THRESHOLD = 80;
const TOP_THRESHOLD = 64;

function isComposerElement(child: ReactNode): boolean {
  return isValidElement(child) && child.type === ChatComposer;
}

export function Chat({
  onLoadMore,
  hasMore = false,
  loading = false,
  children,
  onScroll,
  ...rest
}: ChatProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollHeightRef = useRef(0);
  const isAtBottomRef = useRef(true);
  const loadMoreLockRef = useRef(false);

  const childList = Children.toArray(children);
  const hasComposer = childList.some(isComposerElement);

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
  }, [children, loading, syncScrollHeight]);

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
    if (!loading) {
      loadMoreLockRef.current = false;
    }
  }, [loading]);

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
        !loading &&
        !loadMoreLockRef.current &&
        onLoadMore
      ) {
        loadMoreLockRef.current = true;
        void onLoadMore();
      }
    },
    [hasMore, loading, measureAtBottom, onLoadMore, onScroll],
  );

  return (
    <div
      {...rest}
      ref={scrollRef}
      tabIndex={rest.tabIndex ?? 0}
      aria-label={rest['aria-label'] ?? 'Conversation'}
      onScroll={handleScroll}
      className={classNames(
        'mosuk-chat',
        '@container/chat',
        'group/chat',
        styles.chat,
        hasComposer && styles.chatWithComposer,
        rest?.className,
      )}
    >
      {children}
    </div>
  );
}
