import { Select as SelectComponent } from '@/components/actions/select/component';
import { SelectProps } from '@/components/actions/select/component.props';
import { SelectOption } from '@/components/actions/select/option/component';
import { SelectOptionProps } from '@/components/actions/select/option/component.props';

export const Select = Object.assign(SelectComponent, {
  Option: SelectOption,
});

export namespace Select {
  export type Props = SelectProps;

  export namespace Option {
    export type Props = SelectOptionProps;
  }
}

import { InputSkeleton as ParentSelectSkeleton } from '@/components/actions/input/.partials/skeleton/component';
import type { InputSkeletonProps as ParentSelectProps } from '@/components/actions/input/.partials/skeleton/component.interface';

export const InputSkeleton = Object.assign(ParentSelectSkeleton, {});

export namespace InputSkeleton {
  export type Props = ParentSelectProps;
}
