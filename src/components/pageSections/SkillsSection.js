import React from 'react';
import SkillCard from '../cards/skillCard';
import skills from '../../data/skills.json';
import WebDevelopment from '../WebDevelopment';

const SkillsSection = () => {

    return (
        <>
        <h1 className="is-white-text" style={{margin: '0', padding: '0', paddingTop: '5%'}}>Skills</h1>        
        <h2 className="is-white-text" style={{margin: '0', padding: '0', paddingTop: '5%'}}>Web Development</h2>
        <div className="container">
            <div style={{marginTop: "10px"}}>
                <WebDevelopment />
                {/* {skills.map((skill) =>
                    (
                    <SkillCard 
                        skillName={skill.skillName} 
                        iconPath={skill.iconPath}
                    />
                    )
                )} */}
            </div>
        </div>      
        </>
    );
};

export default SkillsSection;
