import React from 'react';
import './App.css';
import Hashtag from './Components/Hashtag';
import Header from './Components/Header';
import Label from './Objects/Label';
import Input from './Objects/Input';


const App = () => (
  <main className = "app">
    <Header />
    <Hashtag />
    <Input value = "show"/>
    <Label content = "Mostrar Eventos"/>
  </main>
)

export default App;
