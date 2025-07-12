
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
 const[name , setName] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <input onChange={(e)=>{
          setName(e.target.value)
      }}name="greet" id="greeding" value= {name}  className=" "/>
      {name && <h2>Hello,{name}!</h2>}
    </div>
  )
}

export default App
