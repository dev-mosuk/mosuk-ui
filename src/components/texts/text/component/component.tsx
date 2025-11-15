import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { TextProps } from './component.interface';
import styles from './component.module.css';

export function Text({ children, ...props }: TextProps) {
  const [text, setText] = useState<string | number>(children ?? '');
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const computedStyle = window.getComputedStyle(element);

    const maxHeightStyle = computedStyle.maxHeight;
    if (
      maxHeightStyle &&
      maxHeightStyle !== 'none' &&
      maxHeightStyle !== 'initial' &&
      maxHeightStyle !== 'auto'
    ) {
      const maxHeight = parseInt(maxHeightStyle, 10);

      const lineHeightStyle = computedStyle.lineHeight;
      const fontSize = parseInt(computedStyle.fontSize, 10);
      let lineHeight =
        lineHeightStyle === 'normal' ? fontSize * 1.2 : parseInt(lineHeightStyle, 10);

      const maxLines = Math.floor(maxHeight / lineHeight);
      element.style.setProperty('--max-lines', String(maxLines));
    }

    setText(children ?? '');
  }, [children]);

  const formatText = (content: string | number): ReactNode[] => {
    const textContent = String(content);
    const lines = textContent.split('\n');

    return lines.map((line, index: number) => {
      const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      const italicProcessed = boldProcessed.replace(/\*(.*?)\*/g, '<em>$1</em>');
      const linkProcessed = italicProcessed.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

      return (
        <Fragment key={index}>
          <span dangerouslySetInnerHTML={{ __html: linkProcessed }} />
          {index < lines.length - 1 && <br />}
        </Fragment>
      );
    });
  };

  return (
    <p ref={textRef} {...props} className={`mosuk-text ${styles.text} ${props?.className ?? ''}`}>
      {formatText(text)}
    </p>
  );
}
