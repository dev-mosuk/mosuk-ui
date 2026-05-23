import { Select as SelectComponent } from '@/components/actions/select/component/component';
import { SelectProps } from '@/components/actions/select/component/component.props';
import { SelectOption } from '@/components/actions/select/component/option/component';
import { SelectOptionProps } from '@/components/actions/select/component/option/component.props';

export const Select = Object.assign(SelectComponent, {
  Option: SelectOption,
});

export namespace Select {
  export type Props = SelectProps;

  export namespace Option {
    export type Props = SelectOptionProps;
  }
}
