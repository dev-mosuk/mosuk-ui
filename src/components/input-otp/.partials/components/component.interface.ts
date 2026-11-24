import type { Input } from '@/components/input';
import type { OTPFieldPreview } from '@base-ui/react/otp-field';

type InputOtpOwnProps = {
  size?: Input.Props['size'];
  variant?: Input.Props['variant'];
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

export type InputOtpProps = InputOtpOwnProps &
  Omit<
    OTPFieldPreview.Root.Props,
    'disabled' | 'readOnly' | 'required' | 'size'
  >;
