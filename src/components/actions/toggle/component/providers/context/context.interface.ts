export interface ToggleContextProps {
  value: any | null;
  onChange: (value: any) => void;

  containerRef: React.RefObject<HTMLElement | null>;
  optionRefs: React.RefObject<Map<any, HTMLElement>>;
  registerOption: (value: any, el: HTMLElement | null) => void;
}
