// import logo from './logo.svg';
import React, {useState} from 'react';

import Navbar from './component/Navbar';

import TextForm from './component/TextForm';
//  import Timer from './component/Timer';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 const [mode,setMode] = useState('light')
//  let obj = null;
 const [alert,setAlert] = useState({});
 const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
 }
 const toggleMode=()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert('dark mode is Enabled', 'success');
    document.title = 'textutils-darkmode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('light mode is Enabled', 'success')
  }
 }
  return (
    <>
<Navbar title="R.J." mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Timer/> */}
<TextForm heading="Enter your text" Bvalue="click on uppercase" lvalue="click to lowercase" ClearValue="Clear" />
<About/>
    </>
  );
}

export default App;
