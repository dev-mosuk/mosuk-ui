export interface ComboboxContextProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  close: () => void;
  isDisabled?: boolean;
  noteFieldPress: () => void;
}
