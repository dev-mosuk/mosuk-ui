import { Select as SelectComponent } from './component';
import { SelectProps } from './component.props';
import { SelectOption } from './option/component';
import { SelectOptionProps } from './option/component.props';

export const Select = Object.assign(SelectComponent, {
  Option: SelectOption,
});

export namespace Select {
  export type Props = SelectProps;

  export namespace Option {
    export type Props = SelectOptionProps;
  }
}
