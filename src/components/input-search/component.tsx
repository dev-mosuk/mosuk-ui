import { InputSearchProps } from '@/components/actions/input/(search)/component.interface';
import { Input } from '@/components/actions/input/component';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

export function InputSearch({ ...rest }: InputSearchProps) {
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
    <Input
      {...rest}
      placeholder={rest?.placeholder ?? 'Поиск'}
      value={searchValue}
      onChange={handleInputChange}
    />
  );
}
