import React from 'react';

const ContactForm = () => {
    return (
        <>
        <form method="post" action="https://formspree.io/yannis.panagis1998@gmail.com">
            <div className="container">
                <div className="container__row">
                    <h3 className="is-white-text">Name</h3>
                </div>
                <div className="container__row" style={{marginLeft:'1rem'}}>
                    <input className="input-field" type="text" name="name" id="name"/>
                </div>
                <div className="container__row">
                    <h3 className="is-white-text">Email</h3>
                </div>
                <div className="container__row" style={{marginLeft:'1rem'}}>
                    <input className="input-field" type="email" name="_replyto" />
                </div>
                <div className="container__row">
                    <h3 className="is-white-text">Subject</h3>                    
                </div>
                <div className="container__row" style={{marginLeft:'1rem'}}>
                    <input className="input-field" type="text" name="subject" id="subject" />
                </div>
                <div className="container__row">
                    <h3 className="is-white-text">Message</h3>    
                </div>
                <div className="container__row" style={{marginLeft:'1rem'}}>
                    <textarea className="input-field" name="message" id="message" rows="5" />
                </div>
                <button className="submit-button" type="submit">Send</button>
                <input className="clear-button" type="reset" value="Clear" />
            </div>
        </form>
        </>
    );
}

export default ContactForm;