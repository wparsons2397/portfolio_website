import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TranslationContent from './TranslationContent';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument

const renderWithIntl = (component, locale = 'en-US') => {
    return render(
        <IntlProvider locale={locale}>
            {component}
        </IntlProvider>
    );
};

describe('TranslationContent', () => {
    test('renders', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        // Check for main headings
        expect(screen.getByLabelText('Translation Content Section')).toBeInTheDocument();
        
        // Check for paragraphs
        expect(screen.getByText('In this section there is a bunch of various text.')).toBeInTheDocument();
        expect(screen.getByText('All of it will translate when you change the dropdown')).toBeInTheDocument();
        expect(screen.getByText('I believe that the internet is meant for everyone, an important part of that is by striving to make webpage content in as many languages as possible!')).toBeInTheDocument();
        
        // Check for DropdownMenu component
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
        expect(dropdown).toHaveValue('en-US');
    });

    test('dropdown menu changes the language', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Check initial state
        expect(dropdown).toBeInTheDocument();
        expect(dropdown.value).toBe('en-US');
        
        // Simulate changing the language to Spanish
        fireEvent.change(dropdown, { target: { value: 'es' } });
        
        // Check updated state
        expect(dropdown.value).toBe('es');
    });

    test('locale is changed upon changing the language via the dropdown', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Simulate changing the language to Spanish
        fireEvent.change(dropdown, { target: { value: 'es' } });
        
        // Check that the locale is updated
        expect(screen.getByText('En esta sección hay un montón de texto variado.')).toBeInTheDocument();
    });

    test('changes languages one at a time and confirms the text is correct', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        const translations = {
            'en-US': 'In this section there is a bunch of various text.',
            'es': 'En esta sección hay un montón de texto variado.',
            'nl': 'In deze sectie vindt u een heleboel verschillende teksten.',
            'uk': 'У цьому розділі є купа різноманітного тексту.',
            'ja': 'このセクションにはさまざまなテキストがたくさんあります。'
        };

        Object.keys(translations).forEach(locale => {
            fireEvent.change(dropdown, { target: { value: locale } });
            expect(screen.getByText(translations[locale])).toBeInTheDocument();
        });
    });
});
