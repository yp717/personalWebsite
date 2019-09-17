import React from 'react';
import ContactForm from '../contactForm';

const ContactSection = () => {
    return (
        <>
        <div style={{paddingBottom: '5%'}}>
            <h1 className="is-white-text" style={{margin: '0', padding: '0', paddingTop: '5%'}}>
                Contact
            </h1>
            <h4 className="is-white-text" style={{margin: '10px', marginLeft: '0'}}>
                Want to talk?
            </h4>
            <p className="is-white-text">
            Use the form below if you want to make a request for a new project, website, tutoring, or personal statement advice! Every client is different so I don't set fixed prices - let's see what your vision is and build something awesome together 😊.
            </p>
            <p className="is-white-text">
                Something else? If you're looking for someone to join your team with new energy, ideas and skills for a placement or internship - let's talk! 🤓
            </p>
            <ContactForm/>
        </div>
        </>
    );
}

export default ContactSection;