import React, {useState} from 'react';
import './App.css';
import Table from "./components/Table"

function App() {

  const name: string = "App";
  const surname: string  = "Component";

  const [counter, setCounter] = useState(0);
  

  return (
    <div className="App">

        <Table></Table>
        
    </div>
  );
}

export default App;
