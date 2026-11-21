import { useFieldsetProps } from '@/components/forms/fieldset/hooks/hook.interface';
import { FieldsetContext } from '@/components/forms/fieldset/providers/context/context';
import { useContext } from 'react';

export function useFieldset(): useFieldsetProps {
  const context = useContext(FieldsetContext);

  if (!context) {
    throw new Error('useFieldset must be used within <FieldsetContext>');
  }

  return {
    ...context,
  };
}
