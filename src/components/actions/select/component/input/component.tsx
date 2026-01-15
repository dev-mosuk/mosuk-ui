import { Check, ChevronDown, SearchX } from 'lucide-react';
import React, { useEffect, useId, useRef, useState } from 'react';
import { Dropdown, DropdownDropdown, DropdownDropdownContent } from '../../../../../overlays/dropdown/component/component';
import { InputInput } from '../../../component/input/component';
import styles from '../component.module.css';
import { InputSelectInputOptionProps, InputSelectInputProps } from './component.interface';

export function InputSelectInput({
  ref,

  value,
  values,
  onFocus,
  onBlur,
  onChange,
  onSearch,

  container,

  align,
  side,
  alignOffset,
  sideOffset,
  sticky,

  dropdownClassName,
  dropdownContentClassName,

  ...props
}: InputSelectInputProps) {
  if (!props?.id) {
    const id = useId();
    props.id = id;
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');
  const selectedOption = values.find(
    (option: InputSelectInputOptionProps) => option.value === value
  );

  // * Debounce для поискового запроса
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }, 200);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, onSearch]);

  // * Фильтрация значений по поисковому запросу
  const filteredValues = values.filter((option: InputSelectInputOptionProps) =>
    option.label.toLowerCase().includes(debouncedSearchQuery.trim().toLowerCase())
  );

  // * Получение фокуса
  const handleFocus = () => {
    onFocus?.();
    setSearchQuery('');
  };

  // * Потеря фокуса
  const handleBlur = () => {
    onBlur?.();
    setSearchQuery('');
  };

  // * Ввод текста
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  // * Выбор опции
  const handleOptionSelect = (option: InputSelectInputOptionProps) => {
    onChange?.(option.value);

    setTimeout(() => {
      inputRef.current?.blur();
      setSearchQuery('');
      setDebouncedSearchQuery('');
    }, 300);
  };

  return (
    <Dropdown open={open} onOpenChange={setOpen}>
      <InputInput
        {...props}
        ref={inputRef}
        value={open ? searchQuery : selectedOption?.label ?? ''}
        autoComplete={props?.autoComplete ?? 'off'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={(e) => {
          setOpen(true);
          props?.onClick?.(e);
        }}
        onKeyDown={(e) => {
          props?.onKeyDown?.(e);
        }}
        className={'mosuk-input-select ' + (styles.select ?? '') + ' ' + (props?.className ?? '')}
        onChange={(e) => {
          handleInputChange(e.target.value)
        }}
      >
        <label htmlFor={props?.id} className={styles.arrow} aria-hidden="true">
          <ChevronDown />
        </label>

        {props?.children}
      </InputInput>

      <DropdownDropdown
        container={container}
        anchor={inputRef.current}
        align={align ?? 'center'}
        side={side ?? 'bottom'}
        alignOffset={alignOffset ?? 0}
        sideOffset={sideOffset ?? 0}
        sticky={sticky ?? true}
        positionMethod="fixed"
        className="mosuk-input-select-positioner"
      >
        <DropdownDropdownContent
          className={
            'mosuk-input-select-dropdown ' +
            (styles.dropdown ?? '') +
            ' ' +
            (dropdownClassName ?? '')
          }
          initialFocus={inputRef}
          finalFocus={undefined}
        >
          <div
            className={
              'mosuk-input-select-dropdown-content ' +
              (styles.content ?? '') +
              ' ' +
              (dropdownContentClassName ?? '')
            }
          >
            {filteredValues.length > 0 ? (
              filteredValues.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={() => {
                    handleOptionSelect(option)
                    setOpen(false);
                  }}
                  className={
                    (styles.button ?? '') +
                    ' ' +
                    (option.value === value ? styles.selected : '') +
                    ' ' +
                    (option.className ?? '')
                  }
                >
                  {option.render ? (
                    option.render(option)
                  ) : (
                    <>
                      {option.icon && (
                        <option.icon
                          className={`${styles.icon} ${option.value === value ? styles.selected : ''
                            }`}
                        />
                      )}

                      {option.label}

                      {option.value === value && <Check className={styles.check} />}
                    </>
                  )}
                </button>
              ))
            ) : (
              <div className={styles.empty}>
                <SearchX /> Ничего не найдено
              </div>
            )}
          </div>
        </DropdownDropdownContent>
      </DropdownDropdown>
    </Dropdown>
  );
}
