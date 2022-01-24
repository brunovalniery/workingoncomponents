import React, {useState} from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

function App() {
  return (
    <div>
      <br/>
      <br/>
      <UsuarioEntrada />
      <br/>
      <br/>
      <UsuarioSaida/>
    </div>
  );
}

export default App;
