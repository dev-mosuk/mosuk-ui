import { Fieldset as Component } from './component';
import type { FieldsetProps } from './component.interface';
import { FieldsetField } from './field/component';
import { FieldsetFieldProps } from './field/component.interface';
import { FieldsetFieldInput } from './field/input/component';
import { FieldsetFieldInputProps } from './field/input/component.interface';
import { FieldsetFieldLabel } from './field/label/component';
import { FieldsetFieldLabelProps } from './field/label/component.interface';
import { FieldsetHint } from './hint/component';
import { FieldsetHintType } from './hint/component.enums';
import { FieldsetHintProps } from './hint/component.interface';

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
