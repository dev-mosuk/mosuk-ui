import { useContext } from 'react';
import { AlertsContext } from '../../providers/alerts/context/context';
import { UseAlertsProps } from './hook.interface';

export function useAlerts(): UseAlertsProps {
  const context = useContext(AlertsContext);

  if (!context) {
    throw new Error('useAlerts must be used within <AlertsProvider>');
  }
  
  return context as UseAlertsProps;
}
