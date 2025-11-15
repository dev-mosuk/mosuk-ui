import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Input } from '../../component/component';
import {
  FileInterface,
  InputFilesContextProps,
  InputFilesProps,
} from './component.interface';
import styles from './component.module.css';
import { generateUniqueId } from './input/component.utils';

export const InputFilesContext = createContext<InputFilesContextProps | null>(
  null
);

export function InputFiles({
  cdn: propCdn,
  value: propValue,
  onChange: propOnChange,
  ...props
}: InputFilesProps) {
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
    <InputFilesContext.Provider value={contextValue}>
      <Input
        {...props}
        className={'mosuk-input-files' + ' ' + (styles.fieldset ?? '') + ' ' + (props?.className ?? '')}
      >
        {props?.children}
      </Input>
    </InputFilesContext.Provider>
  );
}
