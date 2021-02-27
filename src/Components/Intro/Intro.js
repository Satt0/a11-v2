import React,{useEffect,useState} from "react";
import ScrollIntoView from "react-scroll-into-view";
// import { values } from "lodash-es";

export default function Intro() {
  const [state,setState]=useState(true);
useEffect(()=>{
  const block=document.getElementById('intro')
const action=()=>{
  const a=(block.getBoundingClientRect().bottom);
  if(a<=0)
  {
    setState(false)
  }
  else{
    setState(true)
  }
}
window.addEventListener('scroll',action)
return ()=>{
  window.removeEventListener('scroll',action)
}
})
useEffect(()=>{
  console.log(state);
  const vd=document.getElementById('myVideo')
  if(state){
    vd.play()
  }
  else{
      vd.pause()
  }
},[state])
  return (
    <div className="Intro-Container" id="intro">
      <figure className="video-container">
        <video
          autoPlay
          
          playsInline
          muted
          loop
          id="myVideo"
          src="/rain.mp4"
          type="video/mp4"
        />
      </figure>
      <div className="test-overlay">
        <div className="Hcontainer">
          <div className="container-text">
          
          
          
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="pattern"
                  width="1"
                  height="3"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <rect x="0" y="0" width="1" height=".8" fill="#ffffff" />
                </pattern>

                <text
                  id="text"
                  x="50%"
                  y="50%"
                  fontFamily="'Oswald', sans-serif"
                  letterSpacing="15px"
                  textAnchor="middle"
                >
                  A11 GAllERY!
                </text>

                <mask id="mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                  <use
                    x="-6"
                    y="-6"
                    stroke="#000"
                    strokeWidth="5"
                    xlinkHref="#text"
                    opacity="1"
                    fill="#000"
                  />
                </mask>
              </defs>

              <use
                x="6"
                y="6"
                xlinkHref="#text"
                opacity="1"
                fill="url(#pattern)"
                mask="url(#mask)"
              />

              <use x="0" y="0" xlinkHref="#text" fill="#fff" />
            </svg>
          </div>

          <ScrollIntoView selector="#galery">
            <button className="container-Button">
              Go to Galery
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}
