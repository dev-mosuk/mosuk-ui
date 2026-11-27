import { FieldsetHintType } from '@/components/fieldset/.partials/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/fieldset/.partials/components/hint/component.interface';
import styles from '@/components/fieldset/.partials/styles/component.module.css';
import { Hint } from '@/components/hint';
import { HintColor } from '@/components/hint/.partials/enums/component.enums';
import classNames from 'classnames';
import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';
import React from 'react';

const FIELDSET_HINT_COLOR: Record<FieldsetHintType, HintColor> = {
  [FieldsetHintType.Info]: HintColor.Primary,
  [FieldsetHintType.Success]: HintColor.Green,
  [FieldsetHintType.Warning]: HintColor.Orange,
  [FieldsetHintType.Error]: HintColor.Red,
};

const FIELDSET_HINT_ICON = {
  [FieldsetHintType.Info]: Info,
  [FieldsetHintType.Success]: CircleCheck,
  [FieldsetHintType.Warning]: CircleMinus,
  [FieldsetHintType.Error]: CircleAlert,
} as const;

export function FieldsetHint<C = 'p'>({
  as,
  type,
  children,
  className,
  ...rest
}: FieldsetHintProps<C>) {
  const hintType = type ?? FieldsetHintType.Info;
  const Icon = FIELDSET_HINT_ICON[hintType];

  return (
    <Hint
      {...({
        ...rest,
        as,
        color: FIELDSET_HINT_COLOR[hintType],
        className: classNames('mosuk-fieldset-hint', styles.hint, className),
        children: (
          <>
            <Icon aria-hidden strokeWidth={2} />
            {children}
          </>
        ),
      } as unknown as Hint.Props<C>)}
    />
  );
}
