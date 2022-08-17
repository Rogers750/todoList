import {React,useState} from 'react';
import styled , { css } from 'styled-components';
import './inputCard.css';
import UpdateInfo from '../updateInfo/updateInfo';
import uuid from 'react-uuid';


const Card=({infoArray,setArr})=>{

    const [currName, updName]=useState('');
    const [currAge, updAge]=useState('');
   

   const namehandler=(ele)=>{
     updName(prev=>{
        prev=ele.target.value
       // console.log(prev);
        return prev;
    });

   }

   const agehandler=(ele)=>{
    updAge(prev=>{
        prev=ele.target.value
       // console.log(prev);
        return prev;
    });
   }

   const updateHandler=(currName,currAge)=>{
     if(currAge!=='' && currName!==''){
        setArr([...infoArray,{Name:currName,age:currAge, id:uuid()}] )
            updAge('');
            updName('');
            document.getElementById('inputName').value='';
            document.getElementById('inputAge').value='';
           
            
       
     }

            
           
   }
      

    
    return(
        <>
        
    <div className="card">
    
    <h6>UserName</h6>
    <div className="input-group mb-3">
        <input type='text' id='inputName' onBlur={namehandler}  className='form-control' placeholder='UserName' />
    </div>

    <h6>Age(years)</h6>
    <div className="input-group mb-3">
        <input type='number' id='inputAge' onBlur={agehandler}  className='form-control' placeholder='UserAge' />
    </div>

    <div>
    <button type="button" className="btn btn-primary" onClick={()=>updateHandler(currName,currAge)} >Add User</button>
    
    </div>

    </div>


    
    </>
    )
}

export default Card;