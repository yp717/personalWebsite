import React, { useState } from 'react';

import githubColorIcon from '../images/icons/socialMediaIcons/github-color.svg';
import githubGrayscaleIcon from '../images/icons/socialMediaIcons/github-grayscale.svg';
import linkedinColorIcon from '../images/icons/socialMediaIcons/linkedin-color.svg';
import linkedinGrayscaleIcon from '../images/icons/socialMediaIcons/linkedin-grayscale.svg';
import mediumColorIcon from '../images/icons/socialMediaIcons/medium-color.svg';
import mediumGrayscaleIcon from '../images/icons/socialMediaIcons/medium-grayscale.svg';
import spotifyColorIcon from '../images/icons/socialMediaIcons/spotify-color.svg';
import spotifyGrayscaleIcon from '../images/icons/socialMediaIcons/spotify-grayscale.svg';
import twitterColorIcon from '../images/icons/socialMediaIcons/twitter-color.svg';
import twitterGrayscaleIcon from '../images/icons/socialMediaIcons/twitter-grayscale.svg';

const twitterLink = `https://twitter.com`;
const githubLink = `https://www.facebook.com`;
const linkedinLink = `https://www.linkedin.com`;
const mediumLink = `https://www.medium.com`;
const spotifyLink = `https://www.spotify.com`;

const SocialLinks = () => {

    const [hovered, setHovered] = useState(false);
    
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
                <div className="col-sm-2">
                    <a href={twitterLink} target="blank">
                        <div className="twitterIcon"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default SocialLinks;