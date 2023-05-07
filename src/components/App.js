import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const {isBlue, setIsBlue} = useState(false);
  const toggleButton = ()=>{
    setIsBlue(!isBlue);
  };
  return (
    <div id="main">
      <p className={isBlue ? "blueColor" : "redColor"} >Newton School</p>
      <button id='button' onClick={toggleButton}>Change Style</button>
    </div>
  )
}


export default App;
