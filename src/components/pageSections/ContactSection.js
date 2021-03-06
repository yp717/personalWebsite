import React from 'react';
import ContactForm from '../contactForm';

const ContactSection = () => {
    return (
        <>
        <div className="container" style={{marginBottom: '5%'}}>
            <h1 className="is-white-text section-heading">Contact</h1>
            <div className="container__row section-container">
                <div className="container__col-sm-12">
                    <h4 className="is-white-text" style={{margin: '10px', marginLeft: '0'}}>
                        Want to talk?
                    </h4>
                    <p className="is-white-text">
                    Use the form below if you want to make a request for a new project, website, tutoring, or personal statement advice! Let's see what your vision is and build something awesome together <span role="img" aria-label="smiling emoji">😊</span>.
                    </p>
                    <p className="is-white-text">
                        Something else? If you're looking for someone to join your team with new energy, ideas and skills for a placement or internship - let's talk! <span role="img" aria-label="nerd emoji">🤓</span>
                    </p>
                    <ContactForm/>
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactSection;