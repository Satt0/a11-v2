import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Card.module.scss'


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
        if((windowsHeight +100 > thisEl.top) && (thisEl.bottom > -100 && focus)){
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
  return (
    <>
    
    <animated.div
      className={`${styles.card} ${focus?styles.onFocus:""}`}
      ref={ref}
      onClick={()=>{setFocus(true)}}
      onMouseEnter={()=>{setBg(hoverImage)}}
      onMouseLeave={() => {setBg(image)}}
      style={{backgroundImage:`url(${bg})`}}
    >
     
    </animated.div>
    {/* {focus?(<div  className={styles.wrapper}>

<div className={styles.bg} style={{backgroundImage:`url(${bg})`}}>

</div>
<div onClick={(e)=>{e.stopPropagation();setFocus(false);console.log('clicked');}} className={styles.overlay}></div>:<></>
</div>):<></>} */}
    </>
    
  )
}
