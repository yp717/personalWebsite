import React from 'react';

const githubLink = `https://github.com/yp717`;
const linkedinLink = `https://www.linkedin.com/in/yannis-panagis/`;
const mediumLink = `https://medium.com/@yannis.panagis1998`;
const spotifyLink = `https://open.spotify.com/artist/4tCn4Wkn4cf0CWLUFvQO58?si=XUyEXMPASyqdhksoCx587g`;

const SocialLinks = () => {    
    return (
        <>
        <div className="container">
            <div className="container__row">
                <div className="col-sm-2" style={{marginLeft: '0'}}>
                    <a href={githubLink} target="blank">
                        <div className="githubIcon" />
                    </a>
                </div>
                <div className="col-sm-2">
                    <a href={linkedinLink} target="blank">
                        <div className="linkedinIcon"/>
                    </a>
                </div>
                <div className="col-sm-2"> 
                    <a href={mediumLink} target="blank">
                        <div className="mediumIcon"/>
                    </a>
                </div>
                <div className="col-sm-2">
                    <a href={spotifyLink} target="blank">
                        <div className="spotifyIcon"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default SocialLinks;