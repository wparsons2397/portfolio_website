import React from 'react';
import { IntlProvider } from 'react-intl';
import messagesEN from './Portfolio/AccessibilityContent/lang/en-US.json';
import messagesES from './Portfolio/AccessibilityContent/lang/es.json';
import messagesNL from './Portfolio/AccessibilityContent/lang/nl.json';
import messagesUK from './Portfolio/AccessibilityContent/lang/uk.json';
import messagesJA from './Portfolio/AccessibilityContent/lang/ja.json';

const messages = {
  "en-US": messagesEN,
  "es": messagesES,
  "nl": messagesNL,
  "uk": messagesUK,
  "ja": messagesJA,
};

export function IntlManager({ children, locale }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}