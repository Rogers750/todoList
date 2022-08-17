import {React,useState,useEffect} from 'react';
import styled , { css } from 'styled-components';
import './updateInfo.css';


const UpdateInfo=({userArray,setArr})=>{
                
    const deleteItem=(id)=>{
         const list= [...userArray]
        const updatedList=list.filter(ele=>ele.id!==id)

        setArr(updatedList);
        
    }



     
    
    const render=(myMap)=>{
        const items= myMap.map(
            item=>(
              <li key={item.id} onClick={()=>deleteItem(item.id)} className='user'>{item.Name}  {item.age}</li>
            )
        ) 

        return <ul>{items}</ul>;
    }



    return(
              <>
                {
                    render(userArray)
                    
                }
                </>
            
      
    )
}


export default UpdateInfo;