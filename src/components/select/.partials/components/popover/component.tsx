'use client';

import type { SelectPopoverProps } from '@/components/select/.partials/components/popover/component.interface';
import { SELECT_POPOVER_DEFAULT_SIDE_OFFSET } from '@/components/select/.partials/constants/component.constants';
import { SelectMode } from '@/components/select/.partials/enums/component.enums';
import { useSelect } from '@/components/select/.partials/hooks/hook';
import styles from '@/components/select/.partials/styles/component.module.css';
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

export function SelectPopover({
  className,
  contentClassName,
  children,
  empty,
  sideOffset = SELECT_POPOVER_DEFAULT_SIDE_OFFSET,
  ...rest
}: SelectPopoverProps) {
  const { mode, isMultiple, selected, onSelectChange, rememberItem, query } =
    useSelect();
  const listMode = isMultiple
    ? ListBox.ENUMS.Mode.Multiple
    : ListBox.ENUMS.Mode.Single;

  return (
    <Popover.Overview
      {...rest}
      sideOffset={sideOffset}
      className={classNames('mosuk-select-popover', styles.popover, className)}
    >
      <Popover.Overview.Popup
        initialFocus={false}
        finalFocus={false}
        className={classNames(
          'mosuk-select-popover-content',
          styles.content,
          contentClassName,
        )}
      >
        {Children.map(children, (child) =>
          bindListBoxChild(child, {
            listMode,
            selected,
            onSelectChange,
            rememberItem,
            query,
            empty,
            isSearch: mode === SelectMode.Search,
          }),
        )}
      </Popover.Overview.Popup>
    </Popover.Overview>
  );
}

function bindListBoxChild(
  child: ReactNode,
  state: {
    listMode: NonNullable<ListBox.Props['mode']>;
    selected: string[];
    onSelectChange: (selected: string[]) => void;
    rememberItem: (item: { id: string; textValue: string }) => void;
    query: string;
    empty?: ReactNode;
    isSearch: boolean;
  },
) {
  if (!isValidElement(child) || child.type !== ListBox) {
    return child;
  }

  const list = child as ReactElement<ListBox.Props>;

  return cloneElement(list, {
    mode: list.props.mode ?? state.listMode,
    selected: list.props.selected ?? state.selected,
    onSelectChange: (next: string[]) => {
      list.props.onSelectChange?.(next);
      state.onSelectChange(next);
    },
    matches: state.isSearch
      ? (item) => {
          if (list.props.matches && !list.props.matches(item)) {
            return false;
          }

          return defaultFilter(item.textValue, state.query);
        }
      : list.props.matches,
    onItemRegister: (item) => {
      list.props.onItemRegister?.(item);
      state.rememberItem(item);
    },
    empty:
      state.empty === undefined ? (
        list.props.empty
      ) : (
        <div className={styles.empty}>{state.empty}</div>
      ),
  });
}
