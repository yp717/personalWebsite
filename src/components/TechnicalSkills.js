import React from 'react';

import Cplusplus from '../images/icons/skillIcons/technicalSkills/c++.svg';
import Github from '../images/icons/skillIcons/technicalSkills/github.svg';
import Invision from '../images/icons/skillIcons/technicalSkills/invision.svg';
import Java from '../images/icons/skillIcons/technicalSkills/java.svg';
import R from '../images/icons/skillIcons/technicalSkills/r.svg';
import Sketch from '../images/icons/skillIcons/technicalSkills/sketch.svg';

const SoftwarePackageSkills = () => {
    
    const TechncialSKills = [
        [Cplusplus, "C++"],
        [Java, "Java"],
        [R, "R"],
        [Github, "Github"],
        [Sketch, "Sketch"],
        [Invision, "Invision"]
    ]
    return (
        <> 
            <h2 className="is-white-text section-heading">Technical Skills</h2>
            <div className="container">
                <div className="container__row text-align-center">
                    {TechncialSKills.map((skill) =>
                        (
                            <div className="container__col-sm-2 text-align-center">
                                <img src={skill[0]} style={{height: '50px'}}/>
                                <h3 className="text-align-center is-dark-grey-text">{skill[1]}</h3>
                            </div>                       
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default SoftwarePackageSkills;