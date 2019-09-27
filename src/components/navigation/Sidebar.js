import React from 'react';
import { stack as Menu } from 'react-burger-menu'

const sectionLinks = [
    [
        "home",
        "/",
        "Home"
    ],
    [
        "about", 
        "#about-section",
        "About"
    ],
    [
        "education", 
        "#education-section", 
        "Education"
    ],
    [
        "experience",  
        "#experience-section",
        "Experience"
    ],
    [
        "skills", 
        "#skills-section", 
        "Skills"
    ],
    [
        "achievements", 
        "#achievements-section", 
        "Achievements"
    ],
    [
        "volunteering", 
        "#volunteering-section", 
        "Volunteering"
    ],
    [
        "contact",
        "#contact-section",
        "Contact"
    ]     
]

class Sidebar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }
    
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <>
            <div>
                <Menu 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    pageWrapId={ "page-wrap" } 
                    outerContainerId={ "outer-container"} 
                    disableAutoFocus 
                    className={ "sidebar-menu" }
                >                     
                    {
                        sectionLinks.map((link) =>
                            (
                                <a id={link[0]} className="is-white-text" href={link[1]} onClick={() => this.closeMenu()}>{link[2]}</a>               
                            )
                        )
                    }    
                </Menu>
            </div>
            </>
        );
    }
}

export default Sidebar;