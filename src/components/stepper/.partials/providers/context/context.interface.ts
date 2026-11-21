export type StepperOrientation = 'horizontal' | 'vertical';

export type StepperSize = 'sm' | 'md' | 'lg';

export type StepperStepStatus = 'inactive' | 'active' | 'complete';

export interface StepperContextProps {
  currentStep: number;
  onStepChange?: (step: number) => void;
  orientation: StepperOrientation;
  size: StepperSize;
  isClickable: boolean;
  stepCount: number;
}

export interface StepperStepContextProps {
  index: number;
  status: StepperStepStatus;
  isLast: boolean;
}
