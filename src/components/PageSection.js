import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container" style={{minHeight:"100vh"}}>
            {children}
        </div>
        </>
    );
};

export default PageSection;