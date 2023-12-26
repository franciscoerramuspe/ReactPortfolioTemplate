

import React from 'react';
import Style from './Home.module.scss'; 

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a href={link} className={`${Style['social-icon']} ${Style[label]}`} aria-label={label}>
            <i className={`${icon}`}></i>
        </a>
    );
}

export default SocialIcon;
