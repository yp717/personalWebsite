import React from 'react';

import DesignResearch from '../images/icons/skillIcons/designResearch/Design Research.svg';
import DesignSprints from '../images/icons/skillIcons/designResearch/Design Sprints.svg';
import ResponsiveDesign from '../images/icons/skillIcons/designResearch/Responsive Design.svg';
import UserInterfaceDesign from '../images/icons/skillIcons/designResearch/User Interface Design.svg';
import UXDesign from '../images/icons/skillIcons/designResearch/UX Design.svg';
import Wireframing from '../images/icons/skillIcons/designResearch/Wireframing.svg';

const SoftwarePackageSkills = () => {

    const designSkills = [
        [DesignResearch, "Design Research"],
        [DesignSprints, "Design Sprints"],
        [ResponsiveDesign, "Responsive Design"],
        [UserInterfaceDesign, "User Interface Design"],
        [UXDesign, "UX Design"],
        [Wireframing, "Wireframing"],
    ]

    return (
        <>
        <h2 className="is-white-text section-heading">Design Skills</h2>
        <div className="container">
            <div className="container__row">
                {
                    designSkills.map((skill) =>
                        (
                            <div className="container__col-sm-4 text-align-center" style={{paddingLeft: '30px', paddingRight: '30px'}}>
                                <img src={skill[0]} style={{height: '80px'}}/>
                                <h3 className="text-align-center is-dark-grey-text">{skill[1]}</h3>
                            </div>                       
                        )
                    )
                }
            </div>
        </div>
        </>
    );
}

export default SoftwarePackageSkills;