import React from 'react';

import Fsharp from '../images/icons/skillIcons/technicalSkills/fsharp.svg';
import Python from '../images/icons/skillIcons/technicalSkills/python.svg';
import RaspberyPi from '../images/icons/skillIcons/technicalSkills/raspberry-pi.svg';
import Tensorflow from '../images/icons/skillIcons/technicalSkills/tensorflow.svg';

const LearningSkills = () => {

    newSkills = [
        [Python, "Python"],
        [Tensorflow, "Tensorflow"],
        [RaspberyPi, "RaspberyPi"],
        [Fsharp, "F#"],
    ]
    return (
        <>
            <h2 className="is-white-text" style={{margin: '0', padding: '0'}}>Technical Skills</h2>
            <div className="container">
                <div className="container__row">
                    {TechncialSKills.map((skill) =>
                        (
                            <div className="col-sm-4 text-align-center" style={{padding: '10px'}}>
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

export default LearningSkills;