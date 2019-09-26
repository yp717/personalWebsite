import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container" style={{minHeight:"90vh", paddingBottom: "5%"}}>
            {children}
        </div>
        </>
    );
};

export default PageSection;