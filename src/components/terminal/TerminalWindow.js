import React from 'react';

const spotifyLink = `https://open.spotify.com/artist/4tCn4Wkn4cf0CWLUFvQO58?si=XUyEXMPASyqdhksoCx587g`;

const TerminalWindow = () => { 
    return (
        <>
        <div className="terminal-window">
            {/* three buttons here */}
            <div className="container__row">
                <div className="circle is-red-orange-bg" style={{margin: '0.5rem'}} />
                <div className="circle is-supernova-yellow-bg" style={{margin: '0.5rem'}} />
                <div className="circle is-green-bg" style={{margin: '0.5rem'}} />
            </div>
            <div className="container__row">
                {/* reads this from markdown file */}
                <p className="is-white-text" style={{marginLeft: '2rem', marginRight: '2rem'}}> 
                    > <strong>Some Personal Information</strong> <br/>
                    > Name = Yannis Panagis <br/>
                    > Age = 20 years old <br/>
                    > Nationality = Swiss and Greek <br/>
                    > <br/> 
                    > <strong>A bit about me</strong> <br/>
                    > I'm currently a third year <strong>Electrical Engineering</strong> student at <strong>Imperial College London</strong> and I'm looking for a 6 month placement as part of my degree.<br/>
                    > <br/>
                    > Outside of work I spend my free time working in <strong>web development</strong>, <strong>teaching</strong>,<strong>running</strong> and <strong>writing music</strong>. If you'd like to know more about my music, check out
                    > my spotify {<a className="is-green-text" href={spotifyLink} target="_blank"><strong>here</strong></a>}! 🎸<br/>
                    > <br/>
                    > Aside from placements, I am also actively taking on work in tutoring and personal statement advice so reach out if that's something that interests you. <span>😃</span><br/>
                    > <br/>
                </p>
            </div>
        </div>
        </>
    );
}

export default TerminalWindow;