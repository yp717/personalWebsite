import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container" style={{height:"80vh"}}>
            <h1 className="is-white-text" style={{margin: '0', padding: '0', paddingTop: '5%'}}>{title}</h1>
            {children}
        </div>
        </>
    );
};

export default PageSection;