import { IntlProvider } from 'react-intl';
import messagesEN from './Portfolio/lang/en-US.json';
import messagesES from './Portfolio/lang/es.json';

const messages = {
  "en-US": messagesEN,
  "es": messagesES
};

export function IntlManager({ children, locale }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}