import classNames from 'classnames';
import React, {
  ElementType,
  useId
} from 'react';
import { FieldsetProps } from './component.interface';
import styles from './component.module.css';
import { FieldsetContext } from './context/context';

export function Fieldset<C extends ElementType = 'fieldset'>({
  as,
  id,
  name,
  ...rest
}: FieldsetProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  if (!id) {
    id = useId();
  }

  if (!name) {
    name = id;
  }

  return (
    <FieldsetContext.Provider value={{ id: id, name: name }}>
      <Component
        {...rest}
        className={classNames('mosuk-fieldset', styles.fieldset, rest?.className)}
      >
        {rest?.children}
      </Component>
    </FieldsetContext.Provider>
  );
}
