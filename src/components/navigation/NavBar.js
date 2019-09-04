import React from 'react';
import { navigationPaths } from "../../URLs";
import Logo from "../Logo";

export default () => {
    return (
        <>
    
        <nav className="heightOffset navbar">
            <div className="innerContainer" >
                <Logo/>
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