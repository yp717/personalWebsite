import React from 'react';
import Button from '../components/button';
import SocialLinks from '../components/socialLinks';

const CallToAction = () => {
    return (
        <>
        <div className="center-align">
            {/*  this should be a component */}
            <div className="sidebar-wrapper">
              <div>
                <h1 className="is-dark-grey-text" style={{margin: 0, padding: 0}}>
                  ENGINEER
                </h1>
                <h1 className="is-dark-grey-text" style={{margin: 0, padding: 0}}>
                  DESIGNER
                </h1>
                <h1 className="is-dark-grey-text" style={{margin: 0, padding: 0}}>
                  DEVELOPER
                </h1>
                <h1 className="is-dark-grey-text" style={{margin: 0, padding: 0}}>
                  & STUDENT.
                </h1>
                <h2 className="is-dark-grey-text">
                  Hey, I'm Yannis
                </h2>
                <p className="is-dark-grey-text" style={{fontSize: '16px'}}>
                  I'm a third year MEng Electrical Engineering student at Imperial College London looking for a 6 month placement in 2020.
                </p>
              </div>
              <div>
                <SocialLinks />
              </div>            
              <button className="button is-button-blue-bg">
                Work with me!
              </button>
            </div>
          </div>
        </>      
    );
};

export default CallToAction;