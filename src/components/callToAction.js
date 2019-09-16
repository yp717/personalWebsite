import React from 'react';
import Button from '../components/button';

const CallToAction = () => {
    return (
        <>
        <div style={{margin:'2rem'}}>
            {/*  this should be a component */}
            <h1 style={{margin: 0, padding: 0}}>
              ENGINEER
            </h1>
            <h1 style={{margin: 0, padding: 0}}>
              DESIGNER
            </h1>
            <h1 style={{margin: 0, padding: 0}}>
              DEVELOPER
            </h1>
            <h1 style={{margin: 0, padding: 0}}>
              & STUDENT.
            </h1>
            <h2>
              Hey, I'm Yannis
            </h2>
            <p>
              I'm a third year MEng Electrical Engineering student at Imperial College London looking for a 6 month placement in 2020.
            </p>
            <Button className="button" buttonText="Work with me!" />
          </div>
        </>      
    );
};

export default CallToAction;