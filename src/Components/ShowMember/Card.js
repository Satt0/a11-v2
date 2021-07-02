import React from 'react'
import {  animated } from 'react-spring'
import styles from './Card.module.scss'
import Particle from '../Particle'
export default function Card({image,moveMore=false,hoverImage}) {
    const [bg,setBg]=React.useState(image)
    const [focus,setFocus]=React.useState(false)
  const ref=React.useRef(null)
  React.useEffect(()=>{
    const getElementOffset=(el)=>{
        return (e)=>{
            const thisEl=el.getBoundingClientRect()
        const windowsHeight=window.innerHeight;
       const offset=((thisEl.top/10));    
        if((windowsHeight +100 > thisEl.top) && (thisEl.bottom > -100 )){
            let amount=moveMore?offset:offset/2
               el.style.transform=`translateY(${Math.abs(amount)}px)`
        }
        }
    }
    if(ref?.current){
        window.addEventListener('scroll',getElementOffset(ref.current))

    }

    return ()=>{
        if(typeof window){
            window.removeEventListener('scroll',getElementOffset)
        }
    }
},[ref,moveMore,focus])

React.useEffect(()=>{
  if(focus){
    document.body.style.overflow="hidden"
  }else{
    document.body.style.overflow=""
  }
  return ()=>{
    document.body.style.overflow=""
  }
},[focus])
  return (
    <>
    
    <animated.div
      className={`${styles.card}`}
      ref={ref}
      onClick={()=>{setFocus(true)}}
     
      style={{backgroundImage:`url(${bg})`}}
    >
     
    </animated.div>
    {focus?(<div  className={styles.wrapper} onClick={(e)=>{setFocus(false)}}>
   
          <img className={styles.images} alt="zoom image" src={hoverImage || image}/>
<div  className={styles.overlay}>
  
<Particle/>
  
  </div>:<></>
</div>):<></>}
    </>
    
  )
}
