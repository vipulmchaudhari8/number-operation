import React,{useState} from 'react';

const App = () =>{

const [counter,setCount] = useState(0);

const IncrementNumber = () => {
  setCount(counter+1);
}

const DecrementNumber = () => {
  setCount(counter-1);  
}

  return(
      <div align='center'>
        <h1>Increment/Decrement Operations</h1>
        <h1>{counter}</h1>
        <button  className="w3-button w3-xlarge w3-red" onClick={IncrementNumber}>Increment</button>   
        <button  className="w3-button w3-xlarge w3-teal" onClick={DecrementNumber}>Decrement</button>
      </div>
    );

}

export default App;