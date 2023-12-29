import React from 'react';
import './App.css';
import CheckBox from './Objects/CheckBox';
import Hashtag from './Components/Hashtag';
import Header from './Components/Header';
import About from './Objects/About';


import HeaderInternal from './Components/HeaderInternal/headerInternal';
import ProfileUser from './Components/ProfileUser';

/*import Logo2 from './Objects/LogoInternal/logoInternal';
import AboutLink from './Objects/AboutLink';
import IconClose from './Objects/IconClose';*/
{/*<Logo2 />
<AboutLink className= "-light"/>
<IconClose />*/}


const App = () => (
  <main className = "app">
    <Header />
    <Hashtag />
    <CheckBox id = "show" value = "show" type = "checkbox" content = "Mostrar Eventos"/>

    <About>
      <HeaderInternal />

      <ProfileUser />
    </About> 
  </main>
)

export default App;
