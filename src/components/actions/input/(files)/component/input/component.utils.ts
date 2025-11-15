import { FileInterface } from '../component.interface';

export function generateUniqueId(): string {
  return `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function normalizeFiles(files: FileInterface[] | undefined): FileInterface[] {
  if (!files || !Array.isArray(files)) return [];

  return files.map((file, index) => ({
    ...file,
    id: file.id || generateUniqueId(),
    position: file.position !== undefined ? file.position : index * 10,
    src: file.src || '',
    name: file.name || `Файл ${index + 1}`,
    error: file.error,
    isLoading: file.isLoading || false,
  }));
}
