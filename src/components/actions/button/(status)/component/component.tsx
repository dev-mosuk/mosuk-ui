import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  DropdownDropdown,
  DropdownDropdownContent,
  DropdownTrigger,
} from '../../../../overlays/dropdown/component/component';
import { Button } from '../../component/component';
import { ButtonSkeleton } from '../../skeleton/component';
import { ButtonStatusProps } from './component.interface';
import styles from './component.module.css';

export function ButtonStatus({
  value,
  values,
  onChange,
  disabled,

  className,

  side,
  sideOffset,
  align,
  alignOffset,
  container,

  ...rest
}: ButtonStatusProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    values?.find((option) => option.status === value)
  );

  useEffect(() => {
    setCurrentValue(values?.find((option) => option.status === value));
  }, [value, values]);

  if (!currentValue && values?.length === 0) {
    return null;
  }

  const availableValues = values?.filter((option) => option.status !== currentValue?.status);

  const handleChange = async (newValue: string) => {
    setIsLoading(true);
    setCurrentValue(values?.find((option) => option.status === newValue));

    try {
      await Promise.resolve(onChange?.(newValue));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <ButtonSkeleton {...rest} />;
  }

  if (disabled) {
    return (
      <Button
        {...rest}
        className={`${styles.button} ${className ?? ''} ${currentValue?.className ?? ''}`}
        disabled={true}
      >
        {currentValue?.icon && <currentValue.icon />}
        {currentValue?.text}
      </Button>
    );
  }

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <DropdownTrigger>
        <Button
          {...rest}
          as="span"
          className={`${styles.button} ${className ?? ''} ${currentValue?.className ?? ''}`}
        >
          {currentValue?.icon && <currentValue.icon />}
          {currentValue?.text}
        </Button>
      </DropdownTrigger>

      <DropdownDropdown
        align={'center'}
        alignOffset={0}
        side={'bottom'}
        sideOffset={8}
        container={container}
      >
        <DropdownDropdownContent>
          <div className={`${styles.list}`}>
            {availableValues?.map((option) => (
              <Button
                key={option.status}
                {...rest}
                className={classNames(styles.listButton, option?.className)}
                onClick={() => {
                  handleChange(option.status);
                  setIsOpen(false);
                }}
              >
                {option?.icon && <option.icon />}
                {option?.text}
              </Button>
            ))}
          </div>
        </DropdownDropdownContent>
      </DropdownDropdown>
    </Dropdown>
  );
}
