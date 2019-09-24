import React from 'react';

import English from '../images/icons/skillIcons/languages/united-kingdom.svg';
import German from '../images/icons/skillIcons/languages/germany.svg';
import French from '../images/icons/skillIcons/languages/france.svg';
import Spanish from '../images/icons/skillIcons/languages/spain.svg'

const SoftwarePackageSkills = () => {
    const languageSkills = [
        [English, "English"],
        [German, "German"],
        [French, "French"],
        [Spanish, "Spanish"]
    ]
    
    return (
        <>
            <h2 className="is-white-text section-heading">Languages Spoken</h2>
            <div className="container">
                <div className="container__row">
                    {languageSkills.map((skill) =>
                        (
                            <div className="container__col-sm-3 text-align-center" style={{padding: '10px'}}>
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