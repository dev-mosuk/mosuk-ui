import classNames from 'classnames';
import React, { createContext, useMemo } from 'react';
import { FileContextProps, FileProps } from './component.interface';
import styles from './component.module.css';

export const FileContext = createContext<FileContextProps>({});

export function File({ ...props }: FileProps) {
  const contextValue = useMemo(() => ({}), []);

  return (
    <FileContext.Provider value={contextValue}>
      <div
        {...props}
        className={classNames('mosuk-file', styles.container, props?.className)}
      >
        {props?.children}
      </div>
    </FileContext.Provider>
  );
}
