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
        <div className="overlay" style={{backgroundImage:`url("/cover.jpg")`}}>

        </div>
          <FlipCard order={true}/>
          <FlipCard order={false}/>
      </div>
        
    </div>
  );
}
