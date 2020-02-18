import React from 'react';
import { navigationPaths } from "../../URLs";

export default () => {
    return (
        <>
    
        <nav className="heightOffset navbar">
            <div className="innerContainer" >
            <h3>Yannis Panagis</h3>
                {navigationPaths.map(({ path, name }) => (
                    <a className="navLinks" href={path}>
                        <div style={{display:'flex', alignItems:"center"}}>
                            <span>
                                {name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </nav>
        </>
    );
}