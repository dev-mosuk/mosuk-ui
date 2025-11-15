import type { FieldValues } from 'react-hook-form';
import { formService as BaseFormService } from './service';
import type { FormServiceInterface } from './service.interface';

export const formService = BaseFormService;

export namespace FormService {
  export type Interface<T extends FieldValues = FieldValues> = FormServiceInterface<T>;
} 