import React, { useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';


//componentes
import Header from './components/Header/Header.js';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import CartWidget from './components/CartWidget/CartWidget.js';

import {name, foo} from "./components/Header/Header.js";


const App = ()  => {
    const [userName, setUserName] = useState("aroma");
    
    const[counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const updateUserName= () => {
      setUserName("mmm");

    };

    useEffect(() => {
      setTimeout(() => {
        console.log("gettin data");
      },2000);
    }, []);

    return (
      <div className="App">
        <Header title='COLLIE CANDLE' subtitle="velas aromáticas exóticas"/>
        <NavBar></NavBar>
        <CartWidget/>
        <ItemListContainer/>
        <button onClick={updateUserName}>UpdateUserName</button>
        <p>{userName}</p>
        <h2>{counter}</h2>
        <button onClick= {handleIncrement}>Incrementar</button>
        <button onClick= {handleDecrement}>decrement</button>

        



      </div>
    );

  
    
  
};

export default App;