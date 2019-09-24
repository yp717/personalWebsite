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
import Squarespace from '../images/icons/skillIcons/technicalSkills/squarespace.svg';
import Wordpress from '../images/icons/skillIcons/technicalSkills/wordpress.svg';

const WebDevelopment = () => {

    const webskills = [
        [html5, "html5"],
        [css3, "css3"],
        [javascript, "javascript"],
        [gatsby, "gatsby"],
        [graphql, "graphql"],
        [react, "react"],
        [sass, "sass"],
        [netlify, "netlify"]
    ]

    return (
        <>
        <h2 className="is-white-text section-heading">Web Development</h2>
        <div className="container">
            <div className="container__row">
                {webskills.map((skill) =>
                    (
                        <div className="container__col-sm-2 text-align-center">
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

export default WebDevelopment;