import React, { useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import ScrollIntoView from "react-scroll-into-view";
export default function Intro() {
    const [lock,setLock]=useState(true)
    const Ref=React.useRef(null)
    React.useEffect(()=>{
      if(Ref.current){
        Ref.current.scrollIntoView({behavior:"auto"})
      }
    },[Ref])
  React.useEffect(()=>{
    if(lock){
      
      document.body.style.overflow="hidden"
    }
    // else{
    //   document.body.style.overflow=""

    // }
  },[lock])
  React.useEffect(()=>{
    if(!lock){
      document.body.style.overflow=""

    }
  })
useEffect(()=>{
  let a= setTimeout(()=>{
  },[4000])
  return ()=>{
    clearTimeout(a)
  }
})
  return (
    <div ref={Ref} className={styles.IntroContainer} >
           <div className={styles.content}>
           <h1  className={styles.h1}>#Welcome to A11 Gallery!</h1>
           <h2  className={styles.h2}>A Website of Memories</h2>
           <ScrollIntoView smooth selector="#intro">

            <button onClick={()=>{    setLock(false)
}} className={styles.buttonOn}>Let's GO</button>
           </ScrollIntoView>
           </div>

    </div>
  );
}
