import { Fieldset as Component } from '@/components/forms/fieldset/component';
import type { FieldsetProps } from '@/components/forms/fieldset/component.interface';
import { FieldsetField } from '@/components/forms/fieldset/components/field/component';
import { FieldsetFieldProps } from '@/components/forms/fieldset/components/field/component.interface';
import { FieldsetFieldInput } from '@/components/forms/fieldset/components/field/input/component';
import { FieldsetFieldInputProps } from '@/components/forms/fieldset/components/field/input/component.interface';
import { FieldsetFieldLabel } from '@/components/forms/fieldset/components/field/label/component';
import { FieldsetFieldLabelProps } from '@/components/forms/fieldset/components/field/label/component.interface';
import { FieldsetHint } from '@/components/forms/fieldset/components/hint/component';
import { FieldsetHintType } from '@/components/forms/fieldset/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/forms/fieldset/components/hint/component.interface';

export const Fieldset = Object.assign(Component, {
  Field: Object.assign(FieldsetField, {
    Label: FieldsetFieldLabel,
    Input: FieldsetFieldInput,
  }),
  Hint: FieldsetHint,

  ENUMS: {
    Type: FieldsetHintType,
  },
});

export namespace Fieldset {
  export type Props = FieldsetProps;

  export namespace Field {
    export type Props = FieldsetFieldProps;

    export namespace Label {
      export type Props = FieldsetFieldLabelProps;
    }

    export namespace Input {
      export type Props = FieldsetFieldInputProps;
    }
  }

  export namespace Hint {
    export type Props = FieldsetHintProps;
  }

  export namespace ENUMS {
    export type Type = FieldsetHintType;
  }
}
