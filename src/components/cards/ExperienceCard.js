import React from 'react';

const ExperienceCard = ( {title, subheading, date, description} ) => {
    return (
        <>
            <div className="container__col-sm-12 is-regal-blue-bg experience-card">
                <h2 className="is-white-text card-heading">{title}</h2>
                <h3 className="is-white-text card-heading">{subheading}</h3>
                <h4 className="is-white-text card-date">{date}</h4>
                <p className="is-white-text card-body">{description}</p>
            </div>
        </>
    )
}

export default ExperienceCard;