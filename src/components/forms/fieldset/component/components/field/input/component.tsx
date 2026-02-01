import classNames from 'classnames';
import React, { ElementType, useEffect, useId } from 'react';
import { Input } from '../../../../../../actions/input/component/component';
import styles from '../../../component.module.css';
import { useFieldset } from '../../../hooks/hook';
import { FieldsetFieldInputProps } from './component.interface';

export function FieldsetFieldInput<C extends ElementType = 'input'>({
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
        rest?.className
      )}
    />
  );
}
