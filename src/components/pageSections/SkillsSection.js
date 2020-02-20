import React from 'react';

import WebDevelopment from '../WebDevelopment';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {
    return (
        <>
        <h1 className="is-white-text section-heading">Technical Skills</h1>
            <div className="container" style={{paddingBottom: '20px'}}>
                    <TechnicalSkills />
                    <WebDevelopment />
            </div>
        </>
    );
};

export default SkillsSection;