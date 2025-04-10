import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TranslationContent from './TranslationContent';
import { IntlManager } from '../../IntlManager/IntlManager';
import '@testing-library/jest-dom/extend-expect';

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
        expect(screen.getAllByText('So many websites are designed by English speakers for English speakers.')[0]).toBeInTheDocument();
        expect(screen.getAllByText('The work to add translatable content is rather straightforward.')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Though some browsers can translate a website, that is no excuse for developers to be more considerate of their audiences.')[0]).toBeInTheDocument();
        expect(screen.getAllByText('The internet is a powerful tool meant for all, and translations are important to providing access to all.')[0]).toBeInTheDocument();

        // Check for paragraphs in the right column
        expect(screen.getAllByText('So many websites are designed by English speakers for English speakers.')[1]).toBeInTheDocument();
        expect(screen.getAllByText('The work to add translatable content is rather straightforward.')[1]).toBeInTheDocument();
        expect(screen.getAllByText('Though some browsers can translate a website, that is no excuse for developers to be more considerate of their audiences.')[1]).toBeInTheDocument();
        expect(screen.getAllByText('The internet is a powerful tool meant for all, and translations are important to providing access to all.')[1]).toBeInTheDocument();

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
        expect(screen.getByText('Hay muchos sitios web diseñados por angloparlantes para angloparlantes.')).toBeInTheDocument();
    });

    test('changes the language to Arabic and confirms the locale and direction', () => {
        const { container } = renderWithIntl(<TranslationContent color="#FFFFFF" />);

        const dropdown = screen.getByRole('combobox');

        // Simulate changing the language to Arabic
        fireEvent.change(dropdown, { target: { value: 'ar' } });

        // Check that the locale is updated
        expect(screen.getByText('تم تصميم العديد من المواقع الإلكترونية بواسطة متحدثين باللغة الإنجليزية للمتحدثين باللغة الإنجليزية.')).toBeInTheDocument();

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
        expect(screen.getByText('تم تصميم العديد من المواقع الإلكترونية بواسطة متحدثين باللغة الإنجليزية للمتحدثين باللغة الإنجليزية.')).toBeInTheDocument();

        // Find the element with the class 'RightColumn'
        const translationContentDiv = container.querySelector('.RightColumn');

        // Simulate changing the language to Dutch
        fireEvent.change(dropdown, { target: { value: 'nl' } });

        // Check that the locale is updated
        expect(screen.getByText('Er zijn zoveel websites ontworpen door Engelstaligen, voor Engelstaligen.')).toBeInTheDocument();

        // Check that the direction is now left to right
        expect(translationContentDiv).toHaveAttribute('dir', 'ltr');
    });

    test('changes languages one at a time and confirms the text is correct', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);

        const dropdown = screen.getByRole('combobox');

        const translations = {
            'en': 'So many websites are designed by English speakers for English speakers.',
            'es': 'Hay muchos sitios web diseñados por angloparlantes para angloparlantes.',
            'nl': 'Er zijn zoveel websites ontworpen door Engelstaligen, voor Engelstaligen.',
            'uk': 'Так багато веб-сайтів розроблено англомовними для англомовних.',
            'ja': '多くのウェブサイトは英語話者によって英語話者向けに設計されています。',
            'ar': 'تم تصميم العديد من المواقع الإلكترونية بواسطة متحدثين باللغة الإنجليزية للمتحدثين باللغة الإنجليزية.'
        };

        Object.keys(translations).forEach(locale => {
            fireEvent.change(dropdown, { target: { value: locale } });
            expect(screen.getAllByText(translations[locale])[0]).toBeInTheDocument();
        });
    });

    test('renders with default language', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        expect(screen.getAllByText('So many websites are designed by English speakers for English speakers.')[0]).toBeInTheDocument();
    });

    test('handles invalid language code gracefully', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: 'invalid-code' } });
        expect(screen.getAllByText('So many websites are designed by English speakers for English speakers.')[0]).toBeInTheDocument();
    });

    test('is accessible', () => {
        renderWithIntl(<TranslationContent color="#FFFFFF" />);
        expect(screen.getByLabelText('Translation Content Section')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});
