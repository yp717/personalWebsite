import React from 'react';

const ContactForm = () => {
    return (
        <>
        <form method="post" action="https://formspree.io/yannis.panagis1998@gmail.com">
            <div className="container">
                <div className="container__row">
                    <h3 className="is-white-text form-heading">Name</h3>
                    <input className="input-field" type="text" name="name" id="name" style={{width: '100%'}}/>
                    <h3 className="is-white-text form-heading">Email</h3>
                    <input className="input-field" type="email" name="_replyto" style={{width: '100%'}}/>
                    <h3 className="is-white-text form-heading">Subject</h3>                    
                    <input className="input-field" type="text" name="subject" id="subject" style={{width: '100%'}}/>
                    <h3 className="is-white-text form-heading">Message</h3>    
                    <textarea className="input-field" name="message" id="message" rows="5" style={{height: '100px', width: '100%'}}/>
                </div>
                <button className="submit-button" type="submit">Send</button>
                <input className="clear-button" type="reset" value="Clear" />
            </div>
        </form>
        </>
    );
}

export default ContactForm;