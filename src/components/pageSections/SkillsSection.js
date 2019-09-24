import React from 'react';

import WebDevelopment from '../WebDevelopment';
import DesignSkills from '../DesignSkills';
import LanguageSkills from '../LanguageSkills';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {

    return (
        <>
        <h1 className="is-white-text section-heading">Skills</h1>
            <div>
                <TechnicalSkills />
                <WebDevelopment />
                <DesignSkills />
                <LanguageSkills />
            </div>
        </>
    );
};

export default SkillsSection;