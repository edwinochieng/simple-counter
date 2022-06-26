import React, { useState } from "react";

function App(){

    const [number, setNumber] = useState(0);
      
    function increaseNumber(){
             setNumber( number + 1);
    }
     function decreaseNumber(){
        setNumber(number - 1);
    }
     

    return(
        <div className="grid space-x-4 justify-center ">
        <h1 className="text-9xl font-bold">{number}</h1>
        <div className="flex space-x-4">
        <button onClick={increaseNumber} className ="bg-black text-white font-bold py-2 px-4 rounded" >+</button>
        <button onClick={decreaseNumber} className ="bg-black text-white font-bold py-2 px-4 rounded">-</button>
        </div>
       
        
        
      
        </div>
    )
}
export default App;