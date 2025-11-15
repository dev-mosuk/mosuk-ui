import classNames from 'classnames';
import React, { ElementType, useEffect, useState } from 'react';
import { HeaderProps } from './component.interface';
import styles from './component.module.css';

export function Header<C extends ElementType = 'header'>({
  header,
  ...rest
}: HeaderProps<C>) {
  const Component = (rest?.as || 'header') as ElementType;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if ((header?.enable ?? true) === false) {
      return;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;
    let cachedDocumentHeight = document.documentElement.scrollHeight;
    let cachedWindowHeight = window.innerHeight;

    const recalcDimensions = () => {
      cachedDocumentHeight = document.documentElement.scrollHeight;
      cachedWindowHeight = window.innerHeight;
    };

    const update = () => {
      ticking = false;
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      if (currentScrollY === 0) {
        setProgress(0);
        lastScrollY = currentScrollY;
        return;
      }

      const distanceToBottom =
        cachedDocumentHeight - (currentScrollY + cachedWindowHeight);

      const unit = header?.height ?? 64;
      const progressDelta = Math.min(100, (scrollDelta / unit) * 100);

      if (currentScrollY < (header?.delay?.top ?? 64)) {
        if (currentScrollY < lastScrollY)
          setProgress((prev) => Math.max(0, prev - progressDelta));
        lastScrollY = currentScrollY;
        return;
      }

      if (distanceToBottom < (header?.delay?.bottom ?? 64)) {
        if (currentScrollY > lastScrollY)
          setProgress((prev) => Math.max(0, prev - progressDelta));
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY) {
        setProgress((prev) => Math.min(100, prev + progressDelta));
      } else {
        setProgress((prev) => Math.max(0, prev - progressDelta));
      }

      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const handleResize = () => {
      recalcDimensions();
      handleScroll();
    };

    recalcDimensions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [header]);

  return (
    <Component
      {...rest}
      className={classNames('mosuk-header', styles.header, rest?.className)}
      style={{
        ...rest?.style,
        ...{ '--progress': `${progress}%` },
        ...(progress == 100 ? { display: 'none' } : {}),
      }}
    >
      {rest?.children}
    </Component>
  );
}
