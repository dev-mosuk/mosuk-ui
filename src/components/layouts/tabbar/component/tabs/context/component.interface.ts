export interface TabbarTabsContextProps {
  registerTab: () => number;
  unregisterTab: (index: number) => void;
  activeIndex: number;
  tabCount: number;
}
