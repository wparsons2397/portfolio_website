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

    test('changes the language to Arabic and confirms the locale and direction', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Simulate changing the language to Arabic
        fireEvent.change(dropdown, { target: { value: 'ar' } });
        
        // Check that the locale is updated
        expect(screen.getByText('يوجد في هذا القسم مجموعة من النصوص المتنوعة.')).toBeInTheDocument();
        
        // Check that the direction is now right to left
        const translationContentDiv = screen.getByLabelText('Translation Content Section').parentElement;
        expect(translationContentDiv).toHaveAttribute('dir', 'rtl');
    });

    test('changes the language to Arabic and then to Dutch, confirming the locale and direction', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Simulate changing the language to Arabic
        fireEvent.change(dropdown, { target: { value: 'ar' } });
        
        // Check that the locale is updated
        expect(screen.getByText('يوجد في هذا القسم مجموعة من النصوص المتنوعة.')).toBeInTheDocument();
        
        const translationContentDiv = screen.getByLabelText('Translation Content Section').parentElement;
        
        // Simulate changing the language to Dutch
        fireEvent.change(dropdown, { target: { value: 'nl' } });
        
        // Check that the locale is updated
        expect(screen.getByText('In deze sectie vindt u een heleboel verschillende teksten.')).toBeInTheDocument();
        
        // Check that the direction is now left to right
        expect(translationContentDiv).toHaveAttribute('dir', 'ltr');
    });

    test('changes languages one at a time and confirms the text is correct', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        const translations = {
            'en-US': 'In this section there is a bunch of various text.',
            'es': 'En esta sección hay un montón de texto variado.',
            'nl': 'In deze sectie vindt u een heleboel verschillende teksten.',
            'uk': 'У цьому розділі є купа різноманітного тексту.',
            'ja': 'このセクションにはさまざまなテキストがたくさんあります。',
            'ar': 'يوجد في هذا القسم مجموعة من النصوص المتنوعة.'
        };

        Object.keys(translations).forEach(locale => {
            fireEvent.change(dropdown, { target: { value: locale } });
            expect(screen.getByText(translations[locale])).toBeInTheDocument();
        });
    });

    test('renders with default language', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        expect(screen.getByText('In this section there is a bunch of various text.')).toBeInTheDocument();
    });

    test('handles invalid language code gracefully', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: 'invalid-code' } });
        expect(screen.getByText('In this section there is a bunch of various text.')).toBeInTheDocument();
    });

    test('is accessible', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        expect(screen.getByLabelText('Translation Content Section')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});
