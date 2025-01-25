import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//  
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
      }) 
      setTimeout(() => {
        setAlert(null);
        }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has enabled","Success");
      document.title = 'TextUtil - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has enabled","Success");
    document.title = 'TextUtil - Light Mode';
  }
}
  return (
    <>
    <BrowserRouter>
    <Navbar title2= "Navbar" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about"   element={<About mode={mode}  />} />
          </Routes>
          <Routes>
            <Route exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
