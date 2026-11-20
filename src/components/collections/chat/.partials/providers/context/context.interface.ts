export interface ChatContextProps {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
  disabled: boolean;
  canSubmit: boolean;
}
