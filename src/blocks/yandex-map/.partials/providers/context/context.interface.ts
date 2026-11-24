export interface YMapZoomContextProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom?: number;
  min?: number;
  max?: number;
}
