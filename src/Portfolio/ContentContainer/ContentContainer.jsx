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
        </div>
    )
}

export default ContentContainer;