import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Card.module.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.1]
const trans = (x, y, s) => `translateY(0) perspective(3200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card({image,moveMore=false,hoverImage}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 120, friction: 4 } }))
    const [bg,setBg]=React.useState(image)
  const ref=React.useRef(null)
  React.useEffect(()=>{
    const getElementOffset=(el)=>{
        return (e)=>{
            const thisEl=el.getBoundingClientRect()
        const windowsHeight=window.innerHeight;
       const offset=((thisEl.top/10));    
        if((windowsHeight +100 > thisEl.top) && (thisEl.bottom > -100)){
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
},[ref,moveMore])
  return (
    <animated.div
      className={styles.card}
      ref={ref}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseEnter={()=>{setBg(hoverImage)}}
      onMouseLeave={() => {set({ xys: [0, 0, 1] });setBg(image)}}
      style={{ transform: props.xys.interpolate(trans),backgroundImage:`url(${bg})` }}
    />
  )
}
