import React from 'react';
import { render } from '@testing-library/react';
import { IntlManager } from './IntlManager';
import { FormattedMessage } from 'react-intl';

jest.mock('../Portfolio/AccessibilityContent/lang/en.json', () => ({ 'test.message': 'Test' }));
jest.mock('../Portfolio/AccessibilityContent/lang/es.json', () => ({ 'test.message': 'Prueba' }));

describe('IntlManager', () => {
  it('renders children with default locale', () => {
    const { getByText } = render(
      <IntlManager>
        <FormattedMessage id="test.message" defaultMessage="Test" />
      </IntlManager>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('renders children with specified locale', () => {
    const { getByText } = render(
      <IntlManager locale="es">
        <FormattedMessage id="test.message" defaultMessage="Test" />
      </IntlManager>
    );
    expect(getByText('Prueba')).toBeInTheDocument();
  });

  it('falls back to default locale for unsupported locale', () => {
    const { getByText } = render(
      <IntlManager locale="unsupported">
        <FormattedMessage id="test.message" defaultMessage="Test" />
      </IntlManager>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
});
