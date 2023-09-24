import React from 'react';
import './styles.css';

import AboutLink from '../../Objects/AboutLink';
import Logo2 from '../../Objects/LogoInternal/logoInternal';
import IconClose from '../../Objects/IconClose';


const HeaderInternal = () => (
    <header className = "header-internal">
        <Logo2 />
        <AboutLink className= "-light"/>
        <IconClose />
    </header>
)

export default HeaderInternal;