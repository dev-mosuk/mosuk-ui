import { Fieldset as Component } from '@/components/fieldset/.partials/components/component';
import type { FieldsetProps } from '@/components/fieldset/.partials/components/component.interface';
import { FieldsetFieldInput } from '@/components/fieldset/.partials/components/field-input/component';
import { FieldsetFieldInputProps } from '@/components/fieldset/.partials/components/field-input/component.interface';
import { FieldsetFieldLabel } from '@/components/fieldset/.partials/components/field-label/component';
import { FieldsetFieldLabelProps } from '@/components/fieldset/.partials/components/field-label/component.interface';
import { FieldsetField } from '@/components/fieldset/.partials/components/field/component';
import { FieldsetFieldProps } from '@/components/fieldset/.partials/components/field/component.interface';
import { FieldsetHint } from '@/components/fieldset/.partials/components/hint/component';
import { FieldsetHintType } from '@/components/fieldset/.partials/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/fieldset/.partials/components/hint/component.interface';

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
