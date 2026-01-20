import { useContext } from 'react';
import { FieldsetContext } from '../providers/context/context';
import { useFieldsetProps } from './hook.interface';

export function useFieldset(): useFieldsetProps {
  const context = useContext(FieldsetContext);

  if (!context) {
    throw new Error('useFieldset must be used within <FieldsetContext>');
  }

  return {
    ...context
  };
}
