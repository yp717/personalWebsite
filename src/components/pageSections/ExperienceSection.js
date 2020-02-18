import React from 'react';
import ExperienceCard from '../cards/ExperienceCard';

const ExperienceSection = () => {
    return (
        <>
        <div className="container" style={{marginBottom: '5%'}}>
            <h1 className="is-white-text section-heading">Experience</h1>
            <div className="container__row">
                {/* experience: Private Tutoring*/}
                <ExperienceCard 
                    title="Private Tutoring"
                    subheading="Self-organised"
                    date ="June 2019 - Present"
                    description="Tutoring A-Level, GCSE and University students in Python, Computer Science concepts and Mathematics."
                />

                {/* experience: American Express*/}
                <ExperienceCard 
                    title="Technology Summer Intern"
                    subheading="American Express"
                    date ="June 2019 - Aug 2019"
                    description="Designed, developed and put in production a fully functional research archive solution with ReactJS, GatsbyJS, ExpressJS, and python for the machine learning based backend. Participated in design sprints to determine product requirements, develop wireframes, prototype UX/UI designs"
                />

                {/* experience: Firetech Camp Tutor */}
                <ExperienceCard 
                    title="Firetech Camp Tutor"
                    subheading="Firetech"
                    date ="June 2019 - ongoing"
                    description="Teaching courses to young students to explore coding, robotics, app design, making electronics and more during term-time"
                />

                {/* experience: Corporate Investment Intern*/}
                <ExperienceCard 
                    title="Corporate Investment Intern"
                    subheading="Investcorp B.S.C."
                    date ="June 2016 - Aug 2016"
                    description="Analysed corporate financial data to build models to examine companies and markets to determine investment viability for 10 potential acquisitions"
                />
            </div>
        </div>
        </>
    );
}

export default ExperienceSection;