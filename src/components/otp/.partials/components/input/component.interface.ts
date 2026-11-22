import { OTPFieldPreview } from '@base-ui/react/otp-field';

export interface OTPInputProps
  extends Omit<
    OTPFieldPreview.Input.Props,
    'disabled' | 'readOnly' | 'required'
  > {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}
