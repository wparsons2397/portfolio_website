import React from "react";
import './ContentContainer.css';
import AccessibilityContent from "../AccessibilityContent/AccessibilityContent";
import TranslationContent from "../TranslationContent/TranslationContent";
import TestingContent from "../TestingContent/TestingContent";

function ContentContainer({ contentDisplay, color }) {
    return (
        <div className="ContentContainer" >
            {contentDisplay === 'Accessibility' &&
                <AccessibilityContent color={color} />
            }
            {contentDisplay === 'Translations' &&
                <TranslationContent color={color} />
            }
            {contentDisplay === 'Testing' &&
                <TestingContent color={color} />
            }
            {contentDisplay === 'Display' &&
                <div className="Demo" style={{backgroundColor: color}}>Display</div>
            }
        </div>
    )
}

export default ContentContainer;