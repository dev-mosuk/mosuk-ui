import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputInput } from '../../../component/input/component';
import { InputSearchInputProps } from './component.interface';

export function InputSearchInput({ ...rest }: InputSearchInputProps) {
  const timeoutRef = useRef<number | undefined>(undefined);
  const [searchValue, setSearchValue] = useState(rest?.value);

  useEffect(() => {
    setSearchValue(rest?.value);
  }, [rest?.value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (inputValue.length >= 2 || inputValue.length === 0) {
        const syntheticEvent = {
          ...event,
          target: {
            ...event.target,
            value: inputValue,
          },
        } as ChangeEvent<HTMLInputElement>;

        rest?.onChange?.(syntheticEvent);
      }
    }, 500);
  };

  return (
    <InputInput
      {...rest}
      placeholder={rest?.placeholder ?? 'Поиск...'}
      value={searchValue}
      onChange={handleInputChange}
    />
  );
}
