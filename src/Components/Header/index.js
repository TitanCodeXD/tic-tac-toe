import React from 'react';
import './styles.css';
import Logo from '../../Objects/Logo';
import Sobre from '../../Objects/Sobre';
import Menu from '../../Objects/Menu';

const Header = () => (
    <header className = "header">
        <Logo />
        <Sobre />
        <Menu />
    </header>
)

export default Header