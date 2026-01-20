import React, { ChangeEvent, useContext, useEffect, useId } from 'react';
import { alertsService } from '../../../../../../services/alerts/service';
import { UploadFilesContext } from '../component';
import { CdnFileInterface, FileInterface } from '../component.interface';
import styles from '../component.module.css';
import { UploadFilesInputProps } from './component.interface';
import { generateUniqueId } from './component.utils';

export function UploadFilesInput({ ...props }: UploadFilesInputProps) {
  const context = useContext(UploadFilesContext);

  if (!context) {
    throw new Error(
      'UploadFiles.Input must be used within an UploadFiles component.'
    );
  }

  const { setFiles, setId, cdn, files } = context;

  if (!cdn) {
    throw new Error('UploadFilesContext CDN is not set');
  }

  const generatedId = props.id ?? useId();

  useEffect(() => {
    setId(generatedId);
  }, [setId, generatedId]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const fileList = Array.from(e.target.files);
    const newFiles: FileInterface[] = [];

    // Находим максимальную текущую позицию
    const maxPosition =
      files.length > 0 ? Math.max(...files.map((file) => file.position)) : -10; // Если файлов нет, начинаем с -10, чтобы первый файл получил позицию 0

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileId = generateUniqueId();

      // Создаем временный объект файла с состоянием загрузки
      const newFile: FileInterface = {
        id: fileId,
        position: maxPosition + 10 + i * 10, // Увеличиваем позицию на 10 для каждого нового файла
        src: '',
        name: file.name,
        isLoading: true,
      };

      newFiles.push(newFile);
    }

    // Добавляем новые файлы к текущим из контекста
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);

    // Загрузка файлов на CDN
    try {
      const formData = new FormData();

      // Добавляем все файлы в одну FormData для bulk загрузки
      fileList.forEach((file) => {
        formData.append('file', file);
      });

      const response = await fetch(`${cdn.url}${cdn.endpoint}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${cdn.token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка загрузки файлов');
      }

      // Результат - массив объектов с информацией о загруженных файлах
      const cdnFiles: CdnFileInterface[] = Array.isArray(result)
        ? result
        : [result];

      // Обновляем информацию о файлах
      const updatedFilesList = [...updatedFiles];
      const baseLength = files.length;

      cdnFiles.forEach((cdnFile, index) => {
        const fileIndex = baseLength + index;

        if (cdnFile.error) {
          alertsService.error(cdnFile.error);
        }

        if (fileIndex < updatedFilesList.length) {
          updatedFilesList[fileIndex] = {
            ...updatedFilesList[fileIndex],
            src: cdnFile.src,
            error: cdnFile.error || undefined,
            isLoading: false,
          };
        }
      });

      setFiles(updatedFilesList);
    } catch (error) {
      const updatedFilesList = [...updatedFiles];
      const baseLength = files.length;

      newFiles.forEach((_, index) => {
        const fileIndex = baseLength + index;

        updatedFilesList[fileIndex] = {
          ...updatedFilesList[fileIndex],
          error:
            error instanceof Error ? error.message : 'Ошибка загрузки файла',
          isLoading: false,
        };
      });

      setFiles(updatedFilesList);
    }
  };

  return (
    <input
      aria-hidden="true"
      {...props}
      id={generatedId}
      name={props.name ?? generatedId}
      type="file"
      accept={props.accept ?? '*'}
      multiple={props.multiple ?? true}
      required={props.required === true && (files.length === 0 ? true : false)}
      onChange={handleFileChange}
      className={'mosuk-input-files-input' + ' ' + (styles.input ?? '') + ' ' + (props?.className ?? '')}
    >
      {props?.children}
    </input>
  );
}
