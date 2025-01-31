import React from 'react';
import { IntlProvider } from 'react-intl';
import messagesEN from './Portfolio/AccessibilityContent/lang/en.json';
import messagesES from './Portfolio/AccessibilityContent/lang/es.json';
import messagesNL from './Portfolio/AccessibilityContent/lang/nl.json';
import messagesUK from './Portfolio/AccessibilityContent/lang/uk.json';
import messagesJA from './Portfolio/AccessibilityContent/lang/ja.json';
import messagesAR from './Portfolio/AccessibilityContent/lang/ar.json';

const messages = {
  "en": messagesEN,
  "es": messagesES,
  "nl": messagesNL,
  "uk": messagesUK,
  "ja": messagesJA,
  "ar": messagesAR,
};

export function IntlManager({ children, locale = 'en' }) {
  const validLocales = ['en', 'es', 'nl', 'uk', 'ja', 'ar'];
  const validLocale = validLocales.includes(locale) ? locale : 'en';
  const currentMessages = messages[validLocale];

  return (
    <IntlProvider locale={validLocale} messages={currentMessages} defaultLocale='en'>
      {children}
    </IntlProvider>
  );
}