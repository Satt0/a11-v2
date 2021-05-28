  import React, { useEffect, useState } from "react";
  import FlipCard from "./FlipCard";
  import { useSelector } from "react-redux";
  import dynamic from 'next/dynamic'
  import styles from './Intro.module.scss'
  const Leaf=dynamic(()=>import('./Leaf'))
  export default function Intro() {
    
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

      
      <div className={styles.IntroContainer} id="intro">
       
        
          
          {leaf?<Leaf/>:<></>}
          
       
      
      
        <div className={`${styles.overlay}`}>
          <FlipCard />
        </div>
      </div>
  
  );
  }
