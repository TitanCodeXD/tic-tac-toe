import React from 'react';
import './App.css';
import Hashtag from './Components/Hashtag';
import Header from './Components/Header';
import Input from './Objects/Input';


const App = () => (
  <main className = "app">
    <Header />
    <Hashtag />
    <Input id = "show" value = "show" type = "checkbox" content = "Mostrar Eventos"/>
  </main>
)

export default App;
