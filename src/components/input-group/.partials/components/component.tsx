'use client';

import type { InputGroupProps } from '@/components/input-group/.partials/components/component.interface';
import { InputGroupPostfix } from '@/components/input-group/.partials/components/postfix/component';
import { InputGroupPrefix } from '@/components/input-group/.partials/components/prefix/component';
import { INPUT_GROUP_DEFAULT_SIZE } from '@/components/input-group/.partials/constants/component.constants';
import { InputGroupContext } from '@/components/input-group/.partials/providers/context/context';
import styles from '@/components/input-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';

type InheritProps = {
  size?: InputGroupProps['size'];
  variant?: InputGroupProps['variant'];
  isDisabled?: boolean;
  style?: CSSProperties;
};

function isInputGroupSlot(
  type: unknown,
): type is typeof InputGroupPrefix | typeof InputGroupPostfix {
  return type === InputGroupPrefix || type === InputGroupPostfix;
}

export function InputGroup({
  variant,
  size,
  isDisabled,
  className,
  children,
  style,
  ...rest
}: InputGroupProps) {
  const [prefixWidth, setPrefixWidthState] = useState(0);
  const [postfixWidth, setPostfixWidthState] = useState(0);

  const setPrefixWidth = useCallback((next: number) => {
    setPrefixWidthState(next);
  }, []);

  const setPostfixWidth = useCallback((next: number) => {
    setPostfixWidthState(next);
  }, []);

  const contextValue = useMemo(
    () => ({
      setPrefixWidth,
      setPostfixWidth,
    }),
    [setPrefixWidth, setPostfixWidth],
  );

  let resolvedSize = size ?? INPUT_GROUP_DEFAULT_SIZE;

  const wrappedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || isInputGroupSlot(child.type)) {
      return child;
    }

    const props = child.props as InheritProps;
    resolvedSize = props.size ?? size ?? INPUT_GROUP_DEFAULT_SIZE;

    return cloneElement(child as ReactElement<InheritProps>, {
      size: props.size ?? size,
      variant: props.variant ?? variant,
      isDisabled: props.isDisabled ?? isDisabled,
      style: {
        ...props.style,
        ...(prefixWidth > 0 ? { paddingInlineStart: prefixWidth } : null),
        ...(postfixWidth > 0 ? { paddingInlineEnd: postfixWidth } : null),
      },
    });
  });

  return (
    <InputGroupContext.Provider value={contextValue}>
      <div
        {...rest}
        role='group'
        data-variant={variant || undefined}
        style={
          {
            '--input-size': resolvedSize,
            '--input-group-prefix': `${prefixWidth}px`,
            '--input-group-postfix': `${postfixWidth}px`,
            ...style,
          } as CSSProperties
        }
        className={classNames(
          'mosuk-input-group',
          'group/input-group',
          styles.inputGroup,
          className,
        )}
      >
        {wrappedChildren}
      </div>
    </InputGroupContext.Provider>
  );
}
