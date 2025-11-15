import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';

export class FormErrorsService {
  create<T extends FieldValues>(
    errors: Record<string, string[]> | undefined,
    setError: UseFormSetError<T>,
    parentPath = ''
  ) {
    if (!errors || typeof errors !== 'object') return;

    Object.entries(errors).forEach(([field, messages]) => {
      if (Array.isArray(messages) && messages.length > 0) {
        const path = parentPath ? `${parentPath}.${field}` : field;
        setError(path as FieldPath<T>, {
          message: messages[0],
        });
      }
    });
  }
}

export const formErrorsService = new FormErrorsService();
