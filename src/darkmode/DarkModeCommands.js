import React from 'react';
import useDarkMode from 'use-dark-mode';

const DarkModeCommands = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = useDarkMode(prefersDarkMode);

    return (
        <span>
            Dark Mode is <code>{darkMode.value ? 'enabled' : 'disabled'}</code>. Turn it{' '}
            <button onClick={darkMode.toggle}>{darkMode.value ? 'off': 'on'}</button>.
        </span>
    );
};

export default DarkModeCommands;