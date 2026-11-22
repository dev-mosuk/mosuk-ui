import { OTPFieldPreview } from '@base-ui/react/otp-field';

export interface OTPProps
  extends Omit<
    OTPFieldPreview.Root.Props,
    'disabled' | 'readOnly' | 'required'
  > {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}
