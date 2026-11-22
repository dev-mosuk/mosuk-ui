import type { TBankTerminalProps } from '@/components/tbank-terminal/.partials/component.interface';
import component from '@/components/tbank-terminal/.partials/styles/component.module.css';
import { TBankContext } from '@/providers/tbank/.partials/context/context';
import classNames from 'classnames';
import React, {
  ElementType,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export function TBankTerminal<C extends ElementType = 'div'>({
  as,
  config,
  ...rest
}: TBankTerminalProps<C>) {
  const Component = (as || 'div') as ElementType;

  const containerRef = useRef<Element>(null);
  const context = useContext(TBankContext);

  if (!context) {
    throw new Error('TBankTerminal должен использоваться внутри TBankProvider');
  }

  const { integration, isLoading, error } = context;
  const [integrationInstance, setIntegrationInstance] = useState<any>(null);

  useEffect(() => {
    if (!integration || !containerRef.current || isLoading) {
      return;
    }

    const initConfig = {
      terminalKey: config.terminalKey,
      product: 'eacq',
      features: {
        iframe: {
          container: containerRef.current,
          paymentStartCallback: config.paymentStartCallback,
          config: {
            router: config.router,
            status: config.status,
            language: config.language,
          },
        },
      },
    };

    integration
      .init(initConfig)
      .then((instance: any) => {
        setIntegrationInstance(instance);
        instance.setTheme(config.theme || 'light');
      })
      .catch((err: Error) => {
        console.error('Ошибка инициализации T-Bank:', err);
      });

    return () => {
      if (integrationInstance) {
        integrationInstance.destroy?.();
      }
    };
  }, [integration, isLoading, config]);

  useEffect(() => {
    if (integrationInstance && config.theme) {
      integrationInstance.setTheme(config.theme);
    }
  }, [config.theme, integrationInstance]);

  return (
    <Component
      {...rest}
      ref={containerRef}
      className={classNames(
        'mosuk-tbank-terminal',
        component.TBankTerminal,
        rest?.className,
      )}
    >
      {error || isLoading ? null : rest?.children}
    </Component>
  );
}
