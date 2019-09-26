import React from 'react';

// Lottie Animation
import TrophyAnimation from '../../Animations/trophyAnimation';
import WebDevelopment from '../WebDevelopment';

const AchievementsSection = () => {
    return (
        <>

        <div className="container" style={{marginBottom: '5%'}}>
            <h1 className="is-white-text section-heading">Achievements</h1>
            <div className="container__row">
                <div className="container__col-sm-12">
                    <div className="text-align-center">
                        <TrophyAnimation />
                    </div>
                </div>
                {/* IC Hack winner */}
                <div className="container__col-sm-12 is-white-bg experience-card">
                    <h2 className="is-dark-grey-text card-heading">IC Hack winner</h2>
                    <h3 className="is-dark-grey-text card-heading">Achievement Date</h3>
                    <p className="is-dark-grey-text card-body">
                    Collaborated to build and design a long-range, instant supermarket checkout system using UHF RFID in only 24 hours and won first place overall. The project integrated a JAVA based back-end with an SQL database, a web-app developed with Javascript, and a laser-cut and 3D-printed structural framework controlled by ultrasonic sensors, servos, an Arduino, and Raspberry Pi using Python and C++.
                    </p>
                </div>

                {/* Old Centralian Trust Scholarship */}
                <div className="container__col-sm-12 is-white-bg experience-card">
                    <h2 className="is-dark-grey-text card-heading">Old Centralian Trust Scholarship</h2>
                    <h3 className="is-dark-grey-text card-heading">Achievement Date</h3>
                    <p className="is-dark-grey-text card-body">
                    Scholarship for summer exchange at Stanford University
                    </p>
                </div>

                {/* Gulf Finance House Leadership Award */}
                <div className="container__col-sm-12 is-white-bg experience-card">
                    <h2 className="is-dark-grey-text card-heading">Gulf Finance House Leadership Award</h2>
                    <h3 className="is-dark-grey-text card-heading">Achievement Date</h3>
                    <p className="is-dark-grey-text card-body">
                    $5000 Scholarship for exemplary community impact, academic excellence and leadership
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default AchievementsSection;