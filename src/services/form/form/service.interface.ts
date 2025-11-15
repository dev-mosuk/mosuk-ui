import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormServiceInterface<T extends FieldValues>
  extends UseFormReturn<T> {
  data: T;
  onDirty: (callback: (isDirty: boolean) => void) => void;
  onSubmitting: (callback: (isSubmitting: boolean) => void) => void;
  onSubmitSuccessful: (callback: (isSubmitSuccessful: boolean) => void) => void;
  onErrors: (callback: (errors: Record<string, any>) => void) => void;
}
