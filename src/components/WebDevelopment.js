import React from 'react';

// image imports

import html5 from '../images/icons/skillIcons/web-dev/html-5-icon.svg';
import css3 from '../images/icons/skillIcons/web-dev/css-3-icon.svg';
import javascript from '../images/icons/skillIcons/web-dev/javascript-icon.svg';
import gatsby from '../images/icons/skillIcons/web-dev/gatsby-icon.svg';
import graphql from '../images/icons/skillIcons/web-dev/GraphQL-icon.svg';
import react from '../images/icons/skillIcons/web-dev/react-icon.svg';
import postman from '../images/icons/skillIcons/web-dev/postman-icon.svg';
import sass from '../images/icons/skillIcons/web-dev/sass-icon.svg';
import vscode from '../images/icons/skillIcons/web-dev/visual-studio-code-icon.svg';
import nodejs from '../images/icons/skillIcons/web-dev/nodejs-icon.svg';
import netlify from '../images/icons/skillIcons/web-dev/netlify-icon.svg';
import express from '../images/icons/skillIcons/web-dev/express-icon.svg';

const WebDevelopment = () => {

    const skills = [
        html5,
        css3,
        javascript,
        gatsby,
        graphql,
        react,
        postman,
        sass,
        vscode,
        nodejs,
        netlify,
        express
    ]

    return (
        <>
        {skills.map((skill) =>
            (
                <div className="container__row" style={{paddingLeft: '5%'}}>
                    <img src={skill} style={{height: '30px'}}/>
                    <h3 className="is-dark-grey-text">{skill.name}</h3>
                </div>
            )
        )}
        </>
    );
}

export default WebDevelopment;