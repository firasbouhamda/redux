import React from "react";
import "./App.css";
import AddToDoComponent from "./components/AddToDoComponent";
import ListComponent from "./components/ListComponent";


function App() {
  return (
    <div className="App">
     
            <AddToDoComponent />
            <ListComponent />
    
    </div>
  );
}

export default App;