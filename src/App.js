import React from 'react';
import './App.css';
import Hashtag from './Components/Hashtag';
import Header from './Components/Header';
import Label from './Objects/Label';


const App = () => (
  <main className = "app">
    <Header />
    <Hashtag />
    <Label content = "Mostrar Eventos"/>
  </main>
)

export default App;
