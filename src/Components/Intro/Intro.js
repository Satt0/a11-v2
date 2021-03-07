import React,{useEffect,useState} from "react";
import ScrollIntoView from "react-scroll-into-view";
// import { values } from "lodash-es";
import FlipCard from './FlipCard'
export default function Intro() {
  const [state,setState]=useState(true);


  return (
    <div className="Intro-Container" id="intro">
      <div className="Intro-Container-inner text-inner drop-shadow">

        <h1>Welcome to A11 Gallery!</h1>

      </div>
      <div className="Intro-Container-inner FlipBox">
        <div className="overlay" style={{backgroundImage:`url("/cover.png")`}}>

        </div>
          <FlipCard start={0} end={15}/>
          <FlipCard start={15} end={30}/>
          <FlipCard start={30} end={45}/>

          
      </div>
        
    </div>
  );
}
