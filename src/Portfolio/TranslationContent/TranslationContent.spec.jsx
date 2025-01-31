import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TranslationContent from './TranslationContent';
import { IntlManager } from '../../IntlManager';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument

const renderWithIntl = (component, locale = 'en') => {
    return render(
        <IntlManager locale={locale}>
            {component}
        </IntlManager>
    );
};

describe('TranslationContent', () => {

    //supporessing an annoying error message from formatjs about locale not being passed
    const originalError = console.error;
    beforeAll(() => {
        console.error = (...args) => {
            if (typeof args[0] === 'string' && args[0].includes('[@formatjs/intl Error INVALID_CONFIG]')) {
                return;
            }
            originalError.call(console, ...args);
        };
    });
    
    afterAll(() => {
        console.error = originalError;
    });

    test('renders', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        // Check for main headings
        expect(screen.getByLabelText('Translation Content Section')).toBeInTheDocument();
        
        // Check for paragraphs in the left column
        expect(screen.getByText('So many websites are design by English speakers for English speakers')).toBeInTheDocument();
        expect(screen.getByText('But the work to add translatable content is rather straightforward.')).toBeInTheDocument();
        expect(screen.getByText('Though some browsers can translate a website, that is no excuse for developers to be more considerate of their audiences.')).toBeInTheDocument();
        expect(screen.getByText('The internet is a powerful tool meant for all, and translations are important to providing access to all.')).toBeInTheDocument();
        
        // Check for paragraphs in the right column
        expect(screen.getByText('In this section there is a bunch of various text.')).toBeInTheDocument();
        expect(screen.getByText('All of it will translate when you change the dropdown')).toBeInTheDocument();
        expect(screen.getByText('I believe that the internet is meant for everyone, an important part of that is by striving to make webpage content in as many languages as possible!')).toBeInTheDocument();
        
        // Check for DropdownMenu component
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
        expect(dropdown).toHaveValue('en');
    });

    test('dropdown menu changes the language', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Check initial state
        expect(dropdown).toBeInTheDocument();
        expect(dropdown.value).toBe('en');
        
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
        const { container } = renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Simulate changing the language to Arabic
        fireEvent.change(dropdown, { target: { value: 'ar' } });
        
        // Check that the locale is updated
        expect(screen.getByText('يوجد في هذا القسم مجموعة من النصوص المتنوعة.')).toBeInTheDocument();
        
        // Find the element with the class 'RightColumn'
        const translationContentDiv = container.querySelector('.RightColumn');
        expect(translationContentDiv).toHaveAttribute('dir', 'rtl');
    });

    test('changes the language to Arabic and then to Dutch, confirming the locale and direction', () => {
        const { container } = renderWithIntl(<TranslationContent color="#FFFFFF" />);
        
        const dropdown = screen.getByRole('combobox');
        
        // Simulate changing the language to Arabic
        fireEvent.change(dropdown, { target: { value: 'ar' } });
        
        // Check that the locale is updated
        expect(screen.getByText('يوجد في هذا القسم مجموعة من النصوص المتنوعة.')).toBeInTheDocument();
        
        // Find the element with the class 'RightColumn'
        const translationContentDiv = container.querySelector('.RightColumn');
        
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
            'en': 'In this section there is a bunch of various text.',
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
