import React from 'react';
import SocialLinks from '../components/socialLinks';

const CallToAction = () => {
    return (
        <>
          <div className="sidebar-wrapper">
            <div className="text-align-center">
              <h2 className="is-dark-grey-text" style={{margin: '0', padding: '0'}}>ENGINEER<br/>DESIGNER<br/>DEVELOPER<br/>STUDENT.<br/>
              </h2>
              <h3 className="is-dark-grey-text">
                Hi, I'm Yannis
              </h3>
              <p className="is-dark-grey-text" style={{fontSize: '16px'}}>
                I'm a third year MEng Electrical Engineering student at Imperial College London looking for a 6 month placement in 2020.
              </p>
              <div>
                <SocialLinks />
              </div>
            </div>
            <div style={{marginTop: "20px", marginBottom: "20%"}}>
              <a className="button is-red-orange-bg" href="#contact-section">Work with me!</a>
            </div>          
          </div>
          
        </>      
    );
};

export default CallToAction;