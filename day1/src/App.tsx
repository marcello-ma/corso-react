import React, {useState} from 'react';
import './App.css';
import List from "./components/List"

function App() {

  const name: string = "App";
  const surname: string  = "Component";

  const [counter, setCounter] = useState(0);
  

  return (
    <div className="App" style={{textAlign: "left", marginLeft: 20, marginTop: 20 }}>
      Questo è il nome del componente: {name} {surname}
      <hr/>
      Counter: {counter}
        <br/>
        <button onClick={() => setCounter(counter + 1)}>Incrementa di 1</button>
        <br/>
        <button onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}>Decrementa di 1</button>
        <br/>
        <button onClick={() => setCounter( () => counter <= 0 ? 0 : counter - 1 )}>Decrementa di 1</button>
        
        <List></List>
        
    </div>
  );
}

export default App;
