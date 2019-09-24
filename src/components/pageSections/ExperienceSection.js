import React from 'react';

const ExperienceSection = () => {
    return (
        <>
        <div className="container">
            <h1 className="is-white-text section-heading">Experience</h1>
            <div className="container__row">
                {/* experience: American Express*/}
                <div className="container__col-sm-12 is-theme-color-bg experience-card">
                    <h2 className="is-white-text card-heading">Technology Summer Intern</h2>
                    <h3 className="is-white-text card-heading">American Express</h3>
                    <h4 className="is-white-text card-date">June 2019 - Aug 2019</h4>
                    <p className="is-white-text card-body">
                        Designed, developed and put in production a fully functional research archive solution with ReactJS, GatsbyJS, ExpressJS, and python for the machine learning based backend. Participated in design sprints to determine product requirements, develop wireframes, prototype UX/UI designs
                    </p>
                </div>

                {/* experience: Firetech Camp Tutor */}
                <div className="container__col-sm-12 is-orange-bg experience-card">
                    <h2 className="is-white-text card-heading">Firetech Camp Tutor</h2>
                    <h3 className="is-white-text card-heading">Firetech</h3>
                    <h4 className="is-white-text card-date">June 2019 - ongoing</h4>
                    <p className="is-white-text card-body">
                    Teaching courses to young students to explore coding, robotics, app design, making electronics and more during term-time
                    </p>
                </div>

                {/* experience: Corporate Investment Intern*/}
                <div className="container__col-sm-12 is-dark-blue-bg experience-card">
                    <h2 className="is-white-text card-heading">Corporate Investment Intern</h2>
                    <h3 className="is-white-text card-heading">Investcorp B.S.C.</h3>
                    <h4 className="is-white-text card-date">June 2016 - Aug 2016</h4>
                    <p className="is-white-text card-body">
                    Analysed corporate financial data to build models to examine companies and markets to determine investment viability for 10 potential acquisitions
                    </p>
                </div>

                {/* experience: molecular biology intern */}
                {/* <div className="container__col-sm-12 is-dark-blue-bg experience-card">
                    <h2 className="is-white-text card-heading">American Express</h2>
                    <h3 className="is-white-text card-date">June 2019 - Aug 2019</h3>
                    <p className="is-white-text card-body">
                        Designed, developed and put in production a fully functional research archive solution with ReactJS, GatsbyJS, ExpressJS, and python for the machine learning based backend. Participated in design sprints to determine product requirements, develop wireframes, prototype UX/UI designs
                    </p>
                </div> */}
            </div>
        </div>
        </>
    );
}

export default ExperienceSection;