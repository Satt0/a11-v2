import React,{useEffect,useState} from "react";
// import { values } from "lodash-es";
import FlipCard from './FlipCard'
import ScrollIntoView from 'react-scroll-into-view'
import {getImgPath} from 'lib/ulti'
export default function Intro() {


  return (
    <div className="Intro-Container" id="intro">
      <div className="Intro-Container-inner text-inner drop-shadow">

        <h1>Welcome to A11 Gallery!</h1>
<ScrollIntoView selector="#galery">
<button>Let's Go</button>

</ScrollIntoView>
      </div>
        <div className="overlay" style={{backgroundImage:`url("/cover.jpg")`}}>
      {/* <div className="Intro-Container-inner FlipBox">

        </div>
          <FlipCard start={0} end={15}/>
          <FlipCard start={15} end={30}/>
          <FlipCard start={30} end={45}/> */}

          
      </div>
        
    </div>
  );
}
