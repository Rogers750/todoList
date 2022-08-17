import logo from './logo.svg';
import {React,useState} from 'react';
import './App.css';
import Card from './inputCard/inputCard';
import uuid from 'react-uuid';
import UpdateInfo from './updateInfo/updateInfo';


function App() {
  const infoArr=[{Name:'Max',age:'24', id:uuid()},{Name:'Seb', age:'31',id:uuid()}];

  const[currArr,setArr]=useState(infoArr);
  return (
    
<>
<Card infoArray={currArr} setArr={setArr}/>
  <div className="card" >
       <UpdateInfo userArray={currArr}  setArr={setArr}/>
    </div>
</>
  
  );
}

export default App;
