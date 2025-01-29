import React, { useState } from "react";
import './TranslationContent.css';
import DropdownMenu from "../../CommonComponents/DropdownMenu/DropdownMenu";
import { FormattedMessage } from "react-intl";
import { IntlManager } from "../../IntlManager";

function TranslationContent({color}) {

    const [locale, setLocale] = useState('en-US');

    // MENTION USE OF ISO-639-1 CODES
    const TranslationOptions = [
        { value: 'en-US', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'nl', label: 'Dutch' },
        { value: 'uk', label: 'Ukranian' },
        { value: 'ja', label: 'Japanese' },
    ];
    
    const handleLanguageChange = (value) => {
        if(value !== undefined) {
           setLocale(value);
        }
    }

    return(
        <IntlManager locale={locale}>
            <div className="TranslationContent" style={{background: color}}>
                <h1 aria-label="Translation Content Section">
                    <FormattedMessage id="headerText" defaultMessage="Translation Content Section"/>
                </h1>
                <p>
                    <FormattedMessage id="paragraphOne" defaultMessage="In this section there is a bunch of various text." />
                    </p>
                <p>
                    <FormattedMessage id="paragraphTwo" defaultMessage="All of it will translate when you change the dropdown" />
                </p>
                <p>
                    <FormattedMessage id="dropdown" defaultMessage="Dropdown" />
                </p>
                <DropdownMenu options={TranslationOptions} languageChange={handleLanguageChange}></DropdownMenu>
                <p>
                    <FormattedMessage id="paragraphThree" defaultMessage="I believe that the internet is meant for everyone, an important part of that is by striving to make webpage content in as many languages as possible!" />
                </p>
            </div>
        </IntlManager>
    )

}

export default TranslationContent;