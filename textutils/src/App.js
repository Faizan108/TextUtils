import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
 
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  function showalert(message,type){
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#0d2241';
      showalert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert('Light mode enabled','success');
    }
  }
  return (
    <div className="start">
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container"> 
    <Routes>
          <Route exact path="/about/*" element={ <AboutUs mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}/> 
          </Routes>
       
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
