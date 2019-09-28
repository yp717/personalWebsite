import React from 'react';
import LegoYannisFront from '../../images/LEGOs/lego-yannis-front.svg';
import LegoYannisBack from '../../images/LEGOs/lego-yannis-back.svg';
import LegoYannisFullStack from '../../images/LEGOs/lego-yannis-full-stack.svg';

const LandingSection = () => {
    return (
        <>
            <div className="container__row" style={{display: "block"}}>                    
                <div style={{height: "20%"}} className="container__col-lg-4 container__col-md-4 container__col-sm-12 container__col-xs-12 text-align-center">
                    <img src={LegoYannisFront} />
                    <h2 className="text-align-center is-white-text" style={{paddingBottom: "2%"}}>Front-End</h2>
                </div>
                <div style={{height: "20%"}} className="container__col-lg-4 container__col-md-4 container__col-sm-12 container__col-xs-12 text-align-center">
                    <img src={LegoYannisBack}/>    
                    <h2 className="text-align-center is-white-text" style={{paddingBottom: "2%"}}>Back-End</h2>
                </div>
                <div style={{height: "20%"}} className="container__col-lg-4 container__col-md-4 container__col-sm-12 container__col-xs-12 text-align-center">
                    <img src={LegoYannisFullStack}/>
                    <h2 className="text-align-center is-white-text" style={{paddingBottom: "0%", marginBottom: "0%"}}>Full-Stack</h2>
                </div>
            </div>
        </>
    );
}

export default LandingSection;