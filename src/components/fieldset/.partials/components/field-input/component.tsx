import { FieldsetFieldInputProps } from '@/components/fieldset/.partials/components/field-input/component.interface';
import { useFieldset } from '@/components/fieldset/.partials/hooks/hook';
import styles from '@/components/fieldset/.partials/styles/component.module.css';
import { Input } from '@/components/input';
import classNames from 'classnames';
import React, { ElementType, useEffect, useId } from 'react';

export function FieldsetFieldInput<C = 'input'>({
  as,
  ...rest
}: FieldsetFieldInputProps<C>) {
  const Component = (as || Input) as ElementType;

  const { setId, setName } = useFieldset();

  const uniqueId = rest?.id ?? useId();
  const uniqueName = rest?.name ?? uniqueId;

  useEffect(() => {
    setId(uniqueId);
    setName(uniqueName);
  }, [setId, setName, uniqueId, uniqueName]);

  return (
    <Component
      {...rest}
      id={uniqueId}
      name={uniqueName}
      placeholder={rest?.placeholder ?? ''}
      className={classNames(
        'mosuk-fieldset-field-input',
        styles.input,
        rest?.className,
      )}
    />
  );
}
