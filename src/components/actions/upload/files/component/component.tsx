import classNames from 'classnames';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Input } from '../../../input/component/component';
import {
  FileInterface,
  UploadFilesContextProps,
  UploadFilesProps,
} from './component.interface';
import styles from './component.module.css';
import { generateUniqueId } from './input/component.utils';

export const UploadFilesContext = createContext<UploadFilesContextProps | null>(
  null
);

export function UploadFiles({
  cdn: propCdn,
  value: propValue,
  onChange: propOnChange,
  ...rest
}: UploadFilesProps) {
  const [id, setId] = useState<string | null>(null);
  const [filesState, setFilesState] = useState<FileInterface[]>(
    propValue ?? []
  );
  const [draggedId, setDraggedId] = useState<string | null>(null);

  useEffect(() => {
    if (propValue && Array.isArray(propValue)) {
      const normalizedFiles = propValue.map((file, index) => ({
        ...file,
        id: file.id || generateUniqueId(),
        position: file.position !== undefined ? file.position : index * 10,
      }));

      setFilesState(normalizedFiles);
    }
  }, [propValue]);

  // Обработчик изменения файлов
  const handleFilesChange = useCallback(
    (newFiles: FileInterface[]) => {
      setFilesState(newFiles);
      if (propOnChange) {
        propOnChange(newFiles);
      }
    },
    [propOnChange]
  );

  const contextValue = useMemo(
    () => ({
      id,
      setId,

      cdn: propCdn,

      files: filesState,
      setFiles: handleFilesChange,

      draggedId,
      setDraggedId,
    }),
    [id, propCdn, filesState, draggedId, handleFilesChange]
  );

  return (
    <UploadFilesContext.Provider value={contextValue}>
      <Input
        {...rest}
        className={classNames(
          'mosuk-upload-files',
          styles.fieldset,
          rest?.className
        )}
      >
        {rest?.children}
      </Input>
    </UploadFilesContext.Provider>
  );
}
