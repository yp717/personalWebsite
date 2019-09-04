import React from 'react';

const TerminalWindow = () => {
    return (
        <>
        <div className="terminal-window">
            {/* three buttons here */}
            <div className="container__row">
                <div className="circle is-red-bg" style={{margin: '0.5rem'}} />
                <div className="circle is-yellow-bg" style={{margin: '0.5rem'}} />
                <div className="circle is-bright-green-bg" style={{margin: '0.5rem'}} />
            </div>
            <div className="container__row">
                <p className="is-white-text" style={{marginLeft: '2rem'}}> 
                    > <strong>Personal Information</strong> <br/>
                    > Name: Yannis Panagis <br/>
                    > Age: 20 years old <br/>
                    > Nationality: Swiss and Greek <br/>
                    > <br/> 
                    > <strong>Languages spoken</strong> <br/>
                    > English (fluent), German (fluent)<br/>
                    > French (intermediate), Spanish (beginner)<br/>
                    > <br/>
                    > <strong>Education</strong><br/>
                    > University: Imperial College London<br/>
                    > Degree: MEng Electrical and Electronic Engineering<br/>
                    > <br/>
                </p>
            </div>
        </div>
        </>
    );
}

export default TerminalWindow;