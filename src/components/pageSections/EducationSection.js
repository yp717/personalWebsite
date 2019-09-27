import React from 'react';
import Timeline from '../timeline/timeline';

const EducationSection = () => {
    return (
        <>
            <div className="container">
                <h1 className="is-white-text section-heading">Education</h1>
                <div className="container__row section-heading">                
                    <Timeline/>
                </div>
            </div>
        </>
    );
}

export default EducationSection;