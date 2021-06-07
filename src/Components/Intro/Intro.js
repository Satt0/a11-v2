import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import dynamic from "next/dynamic";
import {useSelector } from 'react-redux'
import styles from "./Intro.module.scss";
const Leaf = dynamic(() => import("./Leaf"));
export default function Intro() {
  const [width, setWidth] = useState(0);
  const ref=React.useRef(null)
  const [img,setImg]=useState([])
  const data = useSelector((state)=>state.bg);

  useEffect(()=>{
    setImg(data)
  },[data])
  React.useEffect(()=>{
    const handler=(ref)=>{
      return ()=>{
        if(ref?.current?.offsetWidth){
          setWidth(Math.max(ref.current.offsetWidth,650)||650)

        }
      }

    }
    handler(ref)()
      
      window.addEventListener('resize',handler(ref))
  },[ref])

  return (
    <div className={styles.IntroContainer} id="intro">
      {/* <Leaf />  */}

      <div className={`${styles.overlay}`} ref={ref}>
        {img?<FlipCard elRef={ref} img={img}/>:<p>loading</p>}
      </div>
    </div>
  );
}
