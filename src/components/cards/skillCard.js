import React from 'react';

const SkillCard = ( {skillName, iconPath} ) => {
    console.log("iconPath is ", iconPath);
    console.log("skillname is ", skillName);

    const path = require( `${iconPath}` );
    return (
        <>
            <div className="container__row" style={{paddingLeft: '5%'}}>
                <img src={path} style={{height: '30px'}}/>
                <h3 className="is-dark-grey-text">{skillName}</h3>
            </div>
            {/* have to get path in here somehow */}
        </>
    );
}

export default SkillCard;