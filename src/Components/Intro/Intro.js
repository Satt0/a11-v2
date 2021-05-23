  import React, { useEffect, useState } from "react";

  import FlipCard from "./FlipCard";
  import { useSelector } from "react-redux";
  import {useColor} from 'lib/hook'
  import Leaf from './Leaf'
  export default function Intro() {
    const color=useColor()
    const [state, setState] = useState(true);
    const [delay,setDelay]=useState(false)
    const theme = useSelector((state) => state.theme);
    const curTheme = useSelector((state) => state.currentTheme);
    const [leaf,setLeaf]=useState(false)
   useEffect(()=>{
      
      const handler=()=>{
        if(window.innerWidth>900){
          setLeaf(true)
        }
        else{
          setLeaf(false)
        }
      }
      window.addEventListener('resize',handler)
      handler()
      return ()=>{
        window.removeEventListener('resize',handler)
      }
   },[])
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
          
          {leaf?<Leaf/>:<></>}
          
        </div>
      
      
        <div className={state ? "overlay" : "overlay disappear"}>
          <FlipCard />
        </div>
      </div>
  
  );
  }
