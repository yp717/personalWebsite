import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import { DarkModeEnabled } from ',.DarkModeStatus';

const sunIcon = require('../images/CommonAssets/mode-toggle-dark-mode.svg');
const moonIcon = require('../images/CommonAssets/mode-toggle.svg');

const DarkModeToggle = () => {
    const [darkModeEnabled, setDarkMode] = useState(DarkModeEnabled());
    const darkMode = useDarkMode(false);

    function buttonClick() {
        if (darkModeEnabled) {
            darkMode.disable();
            setDarkMode(!darkModeEnabled);
        } else {
            darkMode.enable();
            setDarkMode(!darkModeEnabled);
        }
    }

    return (
        <div className="dark-mode-toggle margin-auto grow-on-hover" onClick={() => buttonClick()}>
            <img height={18} src={darkModeEnabled ? sunIcon : moonIcon} className="margin-auto" />
        </div>
    )
}

export default DarkModeToggle;