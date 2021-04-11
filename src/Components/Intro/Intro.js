import React, { useEffect, useState } from "react";
// import { values } from "lodash-es";
import FlipCard from "./FlipCard";
import { useSelector } from "react-redux";
import {useColor} from 'lib/hook'
export default function Intro() {
  const color=useColor()
  const [state, setState] = useState(true);
  const [delay,setDelay]=useState(false)
  const theme = useSelector((state) => state.theme);
  const curTheme = useSelector((state) => state.currentTheme);
  const handleClick = () => {
    setState(false);
  };
  useEffect(() => {
    let a;
    if (!state) {
      a = setTimeout(() => {
        try {
          const id = document.getElementById("story");
          id.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        } catch (err) {}
      }, 500);
    }
    return () => {
      clearTimeout(a);
    };
  }, [state]);
  useEffect(() => {
    let a;
    if (!state) {
      a = setTimeout(() => {
        setState(true);
      }, 1000);
    }
    return () => {
      clearTimeout(a);
    };
  }, [state]);
  useEffect(()=>{
    const a=setTimeout(()=>{
      setDelay(true)
    },1000)
    return ()=>{
      clearTimeout(a)
    }
  },[])
  return (
    <div className="Intro-Container" id="intro">
      <div
        style={{
          backgroundImage: ` linear-gradient(180deg,${theme[curTheme]},.4), transparent)`,
        }}
        className={
          state && delay
            ? "Intro-Container-inner text-inner drop-shadow"
            : `Intro-Container-inner disappear text-inner drop-shadow`
        }
      >
        <h1 >
          Welcome to <span style={{ color:`${color},.8)`,filter:"saturate(150%)"}}>A11</span> Gallery!
        </h1>

        <button 
      
        style={{backgroundImage:` linear-gradient(
          to right,
          ${color}, 1),
          rgba(255, 255, 255, 1) 45%
        )` 
      ,
    color:`${color},1)`
    }}
      
     onClick={handleClick}>
          Let's Go
        </button>
      </div>
      <div className={state ? "overlay" : "overlay disappear"}>
        <FlipCard />
      </div>
    </div>
  );
}
