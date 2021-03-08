import React,{useEffect,useState} from "react";
// import { values } from "lodash-es";
import FlipCard from './FlipCard'
import {useSelector} from 'react-redux'
export default function Intro() {
const [state,setState]=useState(true)

const handleClick=()=>{
    setState(false)
}
useEffect(()=>{
  let a
  if(!state)
  {
    a=setTimeout(()=>{
     try{
      const id=document.getElementById('galery')
      id.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
     }
     catch(err){
       
     }

    },500)
  }
  return ()=>{
    clearTimeout(a)
  }
},[state])
useEffect(()=>{
  let a
  if(!state){
   a= setTimeout(()=>{
      setState(true)

    },1000)
  }
  return ()=>{
      clearTimeout(a)
  }
},[state])
  return (
    <div className="Intro-Container" id="intro">
      <div className={state?'Intro-Container-inner text-inner drop-shadow':`Intro-Container-inner disappear text-inner drop-shadow`}>
        <h1>Welcome to <span>A11</span> Gallery!</h1>

<button data-aos="fade-in" onClick={handleClick}>Let's Go</button>



      </div>
        <div  className={state?"overlay":'overlay disappear'} >
     <FlipCard/>
          
      </div>
        
    </div>
  );
}
