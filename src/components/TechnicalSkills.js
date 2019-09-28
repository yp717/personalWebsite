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
            <div className="skill-section is-white-bg" style={{paddingBottom: '0px'}}>
                <h2 className="is-black-text">Software and App Skills</h2>
                <table>
                    <tbody>
                        {TechncialSKills.map((skill) =>
                            (
                                <>
                                <tr>
                                    <td style={{padding: '0', margin: '0'}}>
                                        <img src={skill[0]} alt="logo" style={{height: '30px'}}/>
                                    </td>                       
                                    <td>
                                        <h3 className="is-black-text" style={{padding: '0', margin: '0'}}>{skill[1]}</h3>
                                    </td>
                                </tr>
                                </>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SoftwarePackageSkills;