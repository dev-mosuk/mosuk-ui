import { Dialog as BaseUiDialog } from '@base-ui-components/react/dialog';
import React, { useContext, useEffect } from 'react';
import styles from '../component.module.css';
import { Context } from '../context/component';
import { DialogProps } from './component.interface';

export function Dialog({ ...props }: DialogProps) {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Dialog.Dialog must be used within a Dialog');
  }

  const {
    styleVars,
    popupRef,
    isDragging,
    handleTouchStart,
    onOpenChange,
    open,
  } = context;
  const { className, children, ...rest } = props;

  useEffect(() => {
    if (!open) return;

    let rafId: number | null = null;

    const measureAndMutate = () => {
      const container = popupRef.current;

      if (!container) return;
      const header = container.querySelector(`.${styles.header}`) as
        | HTMLElement
        | null;
      const footer = container.querySelector(`.${styles.footer}`) as
        | HTMLElement
        | null;

      const windowH = window.innerHeight;

      // read in this frame
      const headerH = header?.getBoundingClientRect().height || 0;
      const footerH = footer?.getBoundingClientRect().height || 0;

      // write in next frame
      rafId = requestAnimationFrame(() => {
        const node = popupRef.current;
        if (!node) return;
        node.style.setProperty('--window-height', `${windowH}px`);
        node.style.setProperty('--header-height', `${headerH}px`);
        node.style.setProperty('--footer-height', `${footerH}px`);
      });
    };

    const ro = new ResizeObserver(() => {
      if (rafId) cancelAnimationFrame(rafId);
      requestAnimationFrame(measureAndMutate);
    });

    if (popupRef.current) {
      ro.observe(popupRef.current);
    }

    // initial
    requestAnimationFrame(measureAndMutate);

    const onResize = () => requestAnimationFrame(measureAndMutate);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [open]);

  return (
    <BaseUiDialog.Popup
      {...rest}
      ref={popupRef}
      className={`mosuk-dialog-dialog ${styles.dialog} ${isDragging ? ` ${styles.dragging}` : ''}${
        className ? ` ${className}` : ''
      }`}
      style={styleVars}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onOpenChange?.(false);
      }}
    >
      <div
        className={styles.gesture}
        onMouseDown={(e) => handleTouchStart(e)}
        onTouchStart={(e) => handleTouchStart(e)}
      >
        <button autoFocus className={styles.line} />
      </div>

      {children}
    </BaseUiDialog.Popup>
  );
}
