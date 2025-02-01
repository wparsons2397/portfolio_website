import React, { useState } from "react";
import './TranslationContent.css';
import DropdownMenu from "../../CommonComponents/DropdownMenu/DropdownMenu";
import { FormattedMessage } from "react-intl";
import { IntlManager } from "../../IntlManager/IntlManager";
import VerticalSeparator from "../../CommonComponents/VerticalSeparator/VerticalSeparator";
import { Colors } from "../../constants/colors";

function TranslationContent({ color }) {

    const [locale, setLocale] = useState('en');

    // MENTION USE OF ISO-639-1 CODES
    const TranslationOptions = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'nl', label: 'Dutch' },
        { value: 'uk', label: 'Ukranian' },
        { value: 'ja', label: 'Japanese' },
        { value: 'ar', label: 'Arabic' },
    ];

    const handleLanguageChange = (value) => {
        if (value !== undefined) {
            setLocale(value);
        }
    }

    const getDirection = (locale) => {
        return locale === 'ar' ? 'rtl' : 'ltr';
    }

    return (
        <IntlManager locale={locale}>
            <div className="TranslationContent" style={{ background: color }}>
                <div className="HeaderSection">
                    <h1 aria-label="Translation Content Section">
                        <FormattedMessage id="headerText" defaultMessage="Translation Content Section" />
                    </h1>
                    <DropdownMenu options={TranslationOptions} languageChange={handleLanguageChange}></DropdownMenu>
                </div>
                <div className="ContentSection">
                    <div className="LeftColumn">
                        <p>So many websites are design by English speakers for English speakers</p>
                        <p>But the work to add translatable content is rather straightforward.</p>
                        <p>Though some browsers can translate a website, that is no excuse for developers to be more considerate of their audiences.</p>
                        <p>The internet is a powerful tool meant for all, and translations are important to providing access to all.</p>
                    </div>
                    <VerticalSeparator color={Colors.ACCENTTWO} />
                    <div className="RightColumn" dir={getDirection(locale)}>
                        <p>
                            <FormattedMessage id="paragraphOne" defaultMessage="In this section there is a bunch of various text." />
                        </p>
                        <p>
                            <FormattedMessage id="paragraphTwo" defaultMessage="All of it will translate when you change the dropdown" />
                        </p>
                        <p>
                            <FormattedMessage id="paragraphThree" defaultMessage="I believe that the internet is meant for everyone, an important part of that is by striving to make webpage content in as many languages as possible!" />
                        </p>
                    </div>
                </div>
            </div>
        </IntlManager>
    )

}

export default TranslationContent;