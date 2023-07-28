import React from 'react';
import './styles.css';
import Logo from '../../Objects/Logo';
import AboutLink from '../../Objects/AboutLink';
import Menu from '../../Objects/Menu';

const Header = () => (
    <header className = "header">
        <Logo />
        <AboutLink />
        <Menu />
    </header>
)

export default Header