import React from 'react';
import './App.css';


//componentes
import Header from './components/Header/Header.js'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import CartWidget from './components/CartWidget/CartWidget.js'

function App () {
  
    return (
      <div className="App">
        <Header title='COLLIE CANDLE' subtitle="velas aromáticas exóticas"/>
        <NavBar></NavBar>
        
        <ItemListContainer/>
      </div>
    );

  
      
  
}

export default App;