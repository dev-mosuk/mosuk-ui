export interface ChatContextProps {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
  isDisabled: boolean;
  canSubmit: boolean;
}
