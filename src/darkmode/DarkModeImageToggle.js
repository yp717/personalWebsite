import React from 'react';
import { DarkModeEnabled } from './DarkModeStatus';

export default function (src) {
    console.log(src);
    let index = src.lastIndexOf('.');
    const fileName = src.substring(0, index);
    const fileType = src.substring(index, src.length);
    const actualFile = `${fileName}${() => DarkModeEnabled() ? '-dark-mode' : ''}${fileType}`;
    console.log(actualFile);
    return actualFile;
}