import React from "react";
import './ContentContainer.css';
import logo from './../../logo.svg';
import AccessibilityContent from "../AccessiblityContent/AccessibilityContent";
import TranslationContent from "../TranslationContent/TranslationContent";

function ContentContainer({contentDisplay, color}) {
    return(
        <div className="ContentContainer" >
            {contentDisplay === 'Accessibility' &&
                <AccessibilityContent color={color}/>
            }
            {contentDisplay === 'Translations' &&
                <TranslationContent color={color}/>
            }
            {contentDisplay === 'Other' &&
                <div>
                    <p>TEST TEST TEST</p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p style={{zIndex:10}}> This is my portfolio website, it is currently under construction. Please come back at a later date.</p>
                </div>
            }
        </div>
    )
}

export default ContentContainer;