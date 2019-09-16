import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimelineComponent = () => {
    return (
        <>
        <Timeline lineColor={'#FF5A5F'}>
        <TimelineItem
            key="002"
            dateText="10/2017 – Present"
            dateInnerStyle={{ background: '#FF5A5F', color: '#FFFFFF' }}
            bodyContainerStyle={{
            background: '#FF5A5F',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h3 className="is-white-text">MEng Electrical & Electrical Engineering</h3>
            <h4 className="is-white-text">Imperial College London</h4>
            <p className="is-white-text">2017-2021, First Year Result 2:1, Second Year Result 2:1; Predicted 2:1 or Higher</p>
        </TimelineItem>
        <TimelineItem
            key="001"
            dateText="06/2018 – 08/2018"
            dateInnerStyle={{ background: '#FF5A5F', color: '#FFFFFF' }}
            style={{ color: '#FF5A5F' }}
        >
            <h3 className="is-white-text">Stanford University Summer Exchange</h3>
            <h4 className="is-white-text">Stanford University</h4>
            <p className="is-white-text">4.0 GPA with A in Data Science 101, A Programming Methodology</p>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="11/2015 – 06/2017"
            dateInnerStyle={{ background: '#FF5A5F', color: '#FFFFFF' }}
            bodyContainerStyle={{
            background: '#FF5A5F',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h3 className="is-white-text">A-Levels</h3>
            <h4 className="is-white-text">British School of Bahrain</h4>
            <p className="is-white-text">
            Mathematics A*, Further Mathematics A*, Physics A, English Literature A
            </p>
        </TimelineItem>
        </Timeline>
        </>
    );
};

export default TimelineComponent;