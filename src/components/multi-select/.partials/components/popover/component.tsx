'use client';

import type { MultiSelectPopoverProps } from '@/components/multi-select/.partials/components/popover/component.interface';
import { MULTI_SELECT_POPOVER_DEFAULT_SIDE_OFFSET } from '@/components/multi-select/.partials/constants/component.constants';
import { useMultiSelect } from '@/components/multi-select/.partials/hooks/hook';
import styles from '@/components/multi-select/.partials/styles/component.module.css';
import { ListBox } from '@/components/list-box';
import { Popover } from '@/components/popover';
import classNames from 'classnames';
import React, {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

function defaultFilter(textValue: string, query: string) {
  const normalized = query.trim().toLocaleLowerCase();

  if (!normalized) {
    return true;
  }

  return textValue.toLocaleLowerCase().includes(normalized);
}

export function MultiSelectPopover({
  className,
  contentClassName,
  children,
  sideOffset = MULTI_SELECT_POPOVER_DEFAULT_SIDE_OFFSET,
  ...rest
}: MultiSelectPopoverProps) {
  const { selected, onSelectChange, rememberItem, query } = useMultiSelect();

  return (
    <Popover.Overview
      {...rest}
      sideOffset={sideOffset}
      className={classNames(
        'mosuk-multi-select-popover',
        styles.popover,
        className,
      )}
    >
      <Popover.Overview.Popup
        initialFocus={false}
        finalFocus={false}
        className={classNames(
          'mosuk-multi-select-popover-content',
          styles.content,
          contentClassName,
        )}
      >
        {Children.map(children, (child) =>
          bindListBoxChild(child, {
            selected,
            onSelectChange,
            rememberItem,
            query,
          }),
        )}
      </Popover.Overview.Popup>
    </Popover.Overview>
  );
}

function bindListBoxChild(
  child: ReactNode,
  state: {
    selected: string[];
    onSelectChange: (selected: string[]) => void;
    rememberItem: (item: { id: string; textValue: string }) => void;
    query: string;
  },
) {
  if (!isValidElement(child) || child.type !== ListBox) {
    return child;
  }

  const list = child as ReactElement<ListBox.Props>;

  return cloneElement(list, {
    mode: list.props.mode ?? ListBox.ENUMS.Mode.Multiple,
    selected: list.props.selected ?? state.selected,
    onSelectChange: (next: string[]) => {
      list.props.onSelectChange?.(next);
      state.onSelectChange(next);
    },
    matches: (item) => {
      if (list.props.matches && !list.props.matches(item)) {
        return false;
      }

      return defaultFilter(item.textValue, state.query);
    },
    onItemRegister: (item) => {
      list.props.onItemRegister?.(item);
      state.rememberItem(item);
    },
  });
}
