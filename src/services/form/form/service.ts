import { useEffect } from 'react';
import { useForm, type FieldValues, type UseFormProps } from 'react-hook-form';
import { FormServiceInterface } from './service.interface';

export class FormService {
  private static instance: FormService;

  private constructor() {}

  public static getInstance(): FormService {
    if (!FormService.instance) {
      FormService.instance = new FormService();
    }
    return FormService.instance;
  }

  public useForm<T extends FieldValues>(
    options: UseFormProps<T> = {}
  ): FormServiceInterface<T> {
    const formMethods = useForm<T>(options);
    const { formState } = formMethods;
    const { isDirty, isSubmitting, isSubmitSuccessful, errors } = formState;

    // Создаем данные с помощью watch
    const data = formMethods.watch() as T;

    // Функции для подписки на события формы
    const onDirty = (callback: (isDirty: boolean) => void) => {
      useEffect(() => {
        callback(isDirty);
      }, [isDirty]);
    };

    const onSubmitting = (callback: (isSubmitting: boolean) => void) => {
      useEffect(() => {
        callback(isSubmitting);
      }, [isSubmitting]);
    };

    const onSubmitSuccessful = (callback: (isSubmitSuccessful: boolean) => void) => {
      useEffect(() => {
        callback(isSubmitSuccessful);
      }, [isSubmitSuccessful]);
    };

    const onErrors = (callback: (errors: Record<string, any>) => void) => {
      useEffect(() => {
        if (Object.keys(errors).length > 0) {
          callback(errors);
        }
      }, [errors]);
    };

    return {
      ...formMethods,
      data,
      onDirty,
      onSubmitting,
      onSubmitSuccessful,
      onErrors,
    };
  }
}

export const formService = FormService.getInstance();
