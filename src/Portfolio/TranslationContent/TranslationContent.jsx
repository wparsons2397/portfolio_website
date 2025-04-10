import React, { useState } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import './TranslationContent.css';
import { Colors } from "../../constants/colors";
import { STATIC_TRANSLATION_LANGUAGES, DYNAMIC_TRANSLATION_LANGUAGES } from "../../constants/translations.js";
import DropdownMenu from "../../CommonComponents/DropdownMenu/DropdownMenu";
import { IntlManager } from "../../IntlManager/IntlManager";
import VerticalSeparator from "../../CommonComponents/VerticalSeparator/VerticalSeparator";
import HorizontalSeparator from "../../CommonComponents/HorizontalSeparator/HorizontalSeparator.jsx";
import ButtonToggle from "../../CommonComponents/ButtonToggle/ButtonToggle";
import Icon from "../../CommonComponents/Icon/Icon.jsx";

const baseObj = {
    text_1: 'Today is Thursday, April the tenth.',
    text_2: 'This is a rare occassion where it is not raining in London. I love seeing the sun so it is nice to have sunshine',
    text_3: 'This is both frontend and backend solution that uses Python to leverage Google Translate.',
    text_4: 'Full stack software development is like solving a puzzle, and the end solution is a complete, harmonious picture.',
};

function TranslationContent({ color }) {
    const [locale, setLocale] = useState('en');
    const [errorText, setErrorText] = useState('');
    const [dynamicTextObj, setDynamicTextObj] = useState(baseObj);
    const [activeTab, setActiveTab] = useState('static');
    const [apiRunning, setApiRunning] = useState(false);
    const [textareaContents, setTextareaContents] = useState('');
    const [textboxTranslated, setTextboxTranslated] = useState('');
    const [expandedSections, setExpandedSections] = useState({});

    const handleLanguageChange = (value) => {
        if (value !== undefined) {
            setLocale(value);
            if (activeTab === 'dynamic') {
                getTranslationsFromApi(value);
            }
        }
    }

    const pingBackend = () => {
        const pingUrl = process.env.REACT_APP_BACKEND_BASE_URL + 'running';
        axios.get(pingUrl)
            .then((response) => {
                console.log("Ping successful");
                setApiRunning(true);
                setErrorText('');
            })
            .catch((error) => {
                console.log("Ping failed");
                setApiRunning(false);
                setErrorText('The API is not running right now!');
            })
    }


    const getTranslationsFromApi = (locale) => {
        const langUrl = process.env.REACT_APP_BACKEND_BASE_URL + 'translate/' + locale;
        axios.post(langUrl,
            {
                text_obj: dynamicTextObj,
            },
            {
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                setDynamicTextObj(response.data);
                setErrorText('');
                //Log Success + new locale, translated text
            })
            .catch((error) => {
                console.log("Error error error!");
                if (error.response) {
                    switch (error.response.status) {
                        case 400:
                            console.log("Incorrect text fields - check if Translate Package is working");
                            setErrorText('Error handling text fields');
                            break;
                        case 404:
                            console.log("API not found");
                            setErrorText('API not found - check .env file and verify URL');
                            break;
                        case 413:
                            console.log("Maximum character length exceeded");
                            setErrorText('Exceeded maximum character length for API');
                            break;
                        case 418:
                            console.log("Invalid input data");
                            setErrorText('Invalid input data - please check your text');
                            break;
                        case 500:
                            console.log("Internal Server Error");
                            setErrorText('Internal Server Error - the API is down right now');
                            break;
                        case 503:
                            console.log("Internal Server Error");
                            setErrorText('Internal Server Error - the API is down right now');
                            break;
                        default:
                            console.log("Unknown Error");
                            setErrorText('The API is experiencing issues right now');
                    }
                }
            })
    }

    const getCustomTranslationsFromApi = (locale) => {
        const langUrl = process.env.REACT_APP_BACKEND_BASE_URL + 'translate_custom/' + locale;
        axios.post(langUrl,
            {
                text_obj: textareaContents,
            },
            {
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                setTextboxTranslated(response.data.custom_text);
                setErrorText('');
                //Here we would fire off a log with the following info:
                //prior locale
                //new locale
                //new text
            })
            .catch((error) => {
                if (error.status === 400) {
                    console.log("Error by string length!");
                    setErrorText('Exceeded maximum character length for API');
                    //log here for specific error instance
                }
                else {
                    console.log("Error by API!");
                    setErrorText('The API is not running right now!');
                    //Error logging in enterprise codebase would be here
                }
            })
    }

    const getDirection = (locale) => {
        const selectedOption = (activeTab === 'static' ? STATIC_TRANSLATION_LANGUAGES : DYNAMIC_TRANSLATION_LANGUAGES)
            .find(option => option.value === locale);
        return selectedOption?.rtl ? 'rtl' : 'ltr';
    }

    const handleTabChange = (tab) => {
        if(tab === 'dynamic') {
            pingBackend();
        }
        setActiveTab(tab);
    };

    const toggleSection = (name) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <IntlManager locale={locale}>
            <div className="TranslationContent" style={{ background: color }}>
                <div className="HeaderSection">
                    <h1 aria-label="Translation Content Section">
                        <FormattedMessage id="headerText" defaultMessage="Translation Content Section" />
                    </h1>
                    <div className="ContentOrganizer">
                        <div className="Tabs">
                            <button
                                className={`TabButton ${activeTab === 'static' ? 'active' : ''}`}
                                onClick={() => handleTabChange('static')}
                            >
                                Static Content
                            </button>
                            <button
                                className={`TabButton ${activeTab === 'dynamic' ? 'active' : ''}`}
                                onClick={() => handleTabChange('dynamic')}
                            >
                                Dynamic Content
                            </button>
                        </div>
                        <DropdownMenu options={activeTab === 'static' ? STATIC_TRANSLATION_LANGUAGES : DYNAMIC_TRANSLATION_LANGUAGES} languageChange={handleLanguageChange}></DropdownMenu>
                        {activeTab === 'dynamic' && apiRunning === false && (
                            <Icon pic="remove" isButton="false" />
                        )}
                        {activeTab === 'dynamic' && apiRunning === true && (
                            <Icon pic="check" isButton="false" />
                        )}
                    </div>
                    <div aria-label={errorText}>{errorText}</div>
                </div>
                {activeTab === 'static' && (
                    <>
                        <div className="ContentSectionHeader"
                            aria-label="This is the static content translation system.">
                            This is the static content translation system.
                        </div>
                        <div className="ContentSection">
                            <div className="LeftColumn">
                                <p>So many websites are designed by English speakers for English speakers.</p>
                                <p>Just because some browsers can automatically translate a website does not mean content is accessible for all.</p>
                                <p>Developers still need to consider their audiences and the devices they use to maximize their reach, as not all browsers have this capability. </p>
                                <p>The internet is a powerful tool, and translations are important to providing access to all.</p>
                            </div>
                            <VerticalSeparator color={Colors.ACCENTTWO} />
                            <div className="RightColumn" dir={getDirection(locale)}>
                                <p>
                                    <FormattedMessage id="paragraphOne" defaultMessage="So many websites are designed by English speakers for English speakers." />
                                </p>
                                <p>
                                    <FormattedMessage id="paragraphTwo" defaultMessage="The work to add translatable content is rather straightforward." />
                                </p>
                                <p>
                                    <FormattedMessage id="paragraphThree" defaultMessage="Though some browsers can translate a website, that is no excuse for developers to be more considerate of their audiences." />
                                </p>
                                <p>
                                    <FormattedMessage id="paragraphFour" defaultMessage="The internet is a powerful tool meant for all, and translations are important to providing access to all." />
                                </p>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'dynamic' && (
                    <>
                        <div className="ContentSectionHeader"
                            aria-label="This is the dynamic python backend content translation system.">
                            This is the dynamic python backend content translation system.
                        </div>
                        <div className="ContentSection">
                            <div className="LeftColumn">
                                <p>So many websites are designed by English speakers for English speakers.</p>
                                <p>Just because some browsers can automatically translate a website does not mean content is accessible for all.</p>
                                <p>Developers still need to consider their audiences and the devices they use to maximize their reach, as not all browsers have this capability. </p>
                                <p>The internet is a powerful tool, and translations are important to providing access to all.</p>
                            </div>
                            <VerticalSeparator color={Colors.ACCENTTWO} />
                            <div className="RightColumn" dir={getDirection(locale)}>
                                <p aria-label={dynamicTextObj.text_1}>
                                    {dynamicTextObj.text_1}
                                </p>
                                <p aria-label={dynamicTextObj.text_2}>
                                    {dynamicTextObj.text_2}
                                </p>
                                <p aria-label={dynamicTextObj.text_3}>
                                    {dynamicTextObj.text_3}
                                </p>
                                <p aria-label={dynamicTextObj.text_4}>
                                    {dynamicTextObj.text_4}
                                </p>
                            </div>
                        </div>
                        <div className="ContentSectionHeader">Try out this textbox example, enter whatever you would like!</div>
                        <div className="ContentSection">
                            <textarea
                                value={textareaContents}
                                onChange={e => setTextareaContents(e.target.value)}
                                placeholder="Enter a message"
                                aria-placeholder="Enter a message"
                                aria-live="polite"
                            />
                            <button
                                className="CustomTranslateButton"
                                onClick={() => getCustomTranslationsFromApi(locale)}
                            >
                                Translate My Text!
                            </button>
                        </div>
                        <div className="TranslationOutput">
                            <p dir={getDirection(locale)}>
                                {textboxTranslated}
                            </p>
                        </div>
                        <ButtonToggle
                            isExpanded={expandedSections["TranslationExplanation"]}
                            onClick={() => toggleSection("TranslationExplanation")}
                        />
                        <HorizontalSeparator color={Colors.ACCENTTWO} />
                        <div
                            className={`TranslationExplanation ${expandedSections["TranslationExplanation"] ? "expanded" : "collapsed"}`}
                        >
                            <div className="ContentSectionHeader">
                                Designing the Implementation
                            </div>
                            <div className="ContentExplanationSection">
                                <p> When implementing this translation system, I experimented with two backend approaches.</p>
                                <p>One being a streamlined approach utilizing the googletrans Python library. The other being an enterprise solution (previously implemented in Ruby), which uses the official Google Translate API library directly.</p>
                                <p> Below, I have outlined the strengths of each approach. The first (left), being what I have done and why, and the second (right) breaking down how I would turn the backend translation implementation into a scalable enterprise solution. </p>
                                <div className="ContentSection">
                                    <div className="LeftColumn">
                                        <p>Why I used Googletrans Library Implementation:</p>
                                        <p><b>Convenience</b> - This is a personal project with zero intention of ever being used for enterprise purposes. A simple python library that handles the Google Translate API work is more straightforward and practical. This cannot be used for a production purpose given rate limits, lack of authentication, and reliance on a 3rd party library.</p>
                                        <p><b>Cost</b> - I prefer to find a low/no cost option for a service such as Google Translate API as a permanent solution for my needs. This is a limitation of my personal project. </p>
                                        <p><b>Development Speed</b> - The googletrans Library is lightweight and offers precisely what I need it to do - accept strings, locale, and return translated text - with no extra complications or heavy workflows to setup.</p>
                                    </div>
                                    <VerticalSeparator color={Colors.ACCENTTWO} />
                                    <div className="RightColumn">
                                        <p>A Future Google Translate API Library Implementation:</p>
                                        <p><b>Security</b> - Proper authentication via Google Cloud, in API authentication to prevent malicious users, and hesitance to rely on a 3rd party library (with an MIT license) make the 1st party Google Translate API vastly superior for enterprise use.</p>
                                        <p><b>Scalability</b> - With a character limit of 15,000 per translation, and potential IP block by Google for overuse (Over 1000 requests/hour), this is not a scaleable solution. The 1st party Google Translate API handles scale at cost, which would be necessary for enterprise use.</p>
                                        <p><b>Reliability</b> - With Google Translate API, you are getitng the reliability of Google & its services, dramatically reducing the chance for outages, issues, and API rate limits. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </IntlManager>
    )

}

export default TranslationContent;