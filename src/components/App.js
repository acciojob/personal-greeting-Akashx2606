
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
 const[name , setName] = useState("")
  return (
    <div className="app-container">
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input
         type="text"
          onChange={(e)=>{
          setName(e.target.value)
      }}
      name="greet" 
      id="greeding" 
      value= {name}  
      className="input-field" 
      placeholder="Enter your name"
      />
      {name && <p className="greeting-text">Hello,{name}!</p>}
    </div>
  )
}

export default App
