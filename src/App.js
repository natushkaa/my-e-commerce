
import React from 'react';
import './App.css';


//Components
import Header from './components/Header/Header.js'
import NavBar from "./components/NavBar";


class App extends React.Component() {
  render(){
    return (

      <div className="App">
        <Header title='COLLIE CANDLE' subtitle="velas aromáticas exóticas"/>
        <NavBar></NavBar>
                 
            
      </div>


    )

  }
  
}

export default App;
