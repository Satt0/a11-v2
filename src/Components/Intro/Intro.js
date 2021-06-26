import React from "react";
import styles from "./Intro.module.scss";
import Particle from "../Particle";
export default function Intro({unLock}) {
  

  return (
    <div className={styles.IntroContainer} >

           <div className={styles.content}>
           <h1  className={styles.h1}>#Welcome to A11 Gallery!</h1>
           <h2  className={styles.h2}>A Website of Memories</h2>
           

            <button onClick={()=>{unLock();console.log("ok");}} className={styles.buttonOn}>Let's GO</button>
          
           </div>
<Particle/>
    </div>
  );
}
