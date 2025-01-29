import React from "react";
import './ContentContainer.css';
import AccessibilityContent from "../AccessibilityContent/AccessibilityContent";
import TranslationContent from "../TranslationContent/TranslationContent";
import TestingContent from "../TestingContent/TestingContent";

function ContentContainer({contentDisplay, color}) {
    return(
        <div className="ContentContainer" >
            {contentDisplay === 'Accessibility' &&
                <AccessibilityContent color={color}/>
            }
            {contentDisplay === 'Translations' &&
                <TranslationContent color={color}/>
            }
            {contentDisplay === 'Testing' &&
                <TestingContent color={color}/>
            }
            {contentDisplay === 'Other' &&
                <div>
                    <p>TEST TEST TEST</p>
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