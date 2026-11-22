import { InputGroup as Component } from '@/components/input-group/.partials/components/component';
import type { InputGroupProps } from '@/components/input-group/.partials/components/component.interface';
import { InputGroupPostfix } from '@/components/input-group/.partials/components/postfix/component';
import type { InputGroupPostfixProps } from '@/components/input-group/.partials/components/postfix/component.interface';
import { InputGroupPrefix } from '@/components/input-group/.partials/components/prefix/component';
import type { InputGroupPrefixProps } from '@/components/input-group/.partials/components/prefix/component.interface';

export const InputGroup = Object.assign(Component, {
  Prefix: InputGroupPrefix,
  Postfix: InputGroupPostfix,
});

export namespace InputGroup {
  export type Props = InputGroupProps;

  export namespace Prefix {
    export type Props = InputGroupPrefixProps;
  }

  export namespace Postfix {
    export type Props = InputGroupPostfixProps;
  }
}
