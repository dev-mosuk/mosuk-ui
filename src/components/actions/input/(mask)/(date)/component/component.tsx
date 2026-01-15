import { format, parse } from 'date-fns';
import { createMask } from 'imask';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IMask } from 'react-imask';
import { InputMask } from '../../component/component';
import { InputMaskDateProps } from './component.interface';

export function InputMaskDate({
  value,
  onChange,
  ...props
}: InputMaskDateProps) {
  const normalizeDate = (dateValue: any): Date | undefined => {
    if (!dateValue) return undefined;

    if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
      return dateValue;
    }

    try {
      const date = new Date(dateValue);
      return !isNaN(date.getTime()) ? date : undefined;
    } catch (e) {
      return undefined;
    }
  };
 
  const normalizedValue = normalizeDate(value);
  const formatted = normalizedValue
    ? format(normalizedValue, 'dd.MM.yyyy')
    : '';

  const [inputValue, setInputValue] = useState(formatted);

  useEffect(() => {
    const newNormalizedValue = normalizeDate(value);
    if (newNormalizedValue) {
      setInputValue(format(newNormalizedValue, 'dd.MM.yyyy'));
    }
  }, [value]);

  const handleAccept = useCallback((val: string) => {
    setInputValue(val);
  }, []);

  const handleComplete = useCallback(
    (val: string) => {
      try {
        const parsed = parse(val, 'dd.MM.yyyy', new Date());

        if (!isNaN(parsed.getTime())) {
          const currentValue = normalizeDate(value);

          if (currentValue && parsed.getTime() === currentValue.getTime()) {
            return;
          }

          onChange?.(parsed as any);
        }
      } catch (error) {
        console.error('Error parsing date:', error);
      }
    },
    [value, onChange]
  );

  const currentYear = new Date().getFullYear();

  const maskInstance = useMemo(
    () =>
      createMask({
        mask: Date,
        pattern: 'DD.MM.YYYY',
        lazy: false,
        blocks: {
          DD: { mask: IMask.MaskedRange, from: 1, to: 31 },
          MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
          YYYY: {
            mask: IMask.MaskedRange,
            from: currentYear - 100,
            to: currentYear + 100,
          },
        },
      }),
    [currentYear]
  );

  return (
    <InputMask
      {...props}
      mask={maskInstance}
      placeholder={props?.placeholder ?? 'ДД.ММ.ГГГГ'}
      value={inputValue}
      onAccept={handleAccept}
      onComplete={handleComplete}
    />
  );
}
