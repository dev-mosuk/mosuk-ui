import { UseAlertsProps } from '@/hooks/alerts/hook.interface';
import { AlertsContext } from '@/providers/alerts/context/context';
import { useContext } from 'react';

export function useAlerts(): UseAlertsProps {
  const context = useContext(AlertsContext);

  if (!context) {
    throw new Error('useAlerts must be used within <AlertsProvider>');
  }

  return context as UseAlertsProps;
}
