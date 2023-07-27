import React from 'react';
import './App.css';
import CheckBox from './Objects/CheckBox';
import Hashtag from './Components/Hashtag';
import Header from './Components/Header';
import About from './Objects/About';


const App = () => (
  <main className = "app">
    <Header />
    <Hashtag />
    <CheckBox id = "show" value = "show" type = "checkbox" content = "Mostrar Eventos"/>

    <About />
  </main>
)

export default App;
