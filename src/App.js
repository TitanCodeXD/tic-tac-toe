import React from 'react';
import Card from './Objects/Card';
import Player from './Objects/Player';
import Header from './Components/Header';


function App() {
  return (
    <>
  <Header/>
  <Card>
    <Player player = "x"/>
    <Player player = "x"/>
    <Player player = "x"/>

    <Player player = "o"/>
    <Player player = "o"/>
    <Player player = "o"/>

    <Player player = "x"/>
    <Player player = "x"/>
    <Player player = "x"/>
  </Card>
    </>
  );
}

export default App;
