import React,{useEffect,useState} from 'react'
import {useSpring,animated,config} from 'react-spring'
export default function Panel({style,see}) {
    // const [a,seta]=useState(false)
    const [props, set, stop] = useSpring(() => ({opacity: 1}))
   
    
    // const props = useSpring({opacity: a ? 1 : 0})
    
    // useEffect(()=>{
    
    // },[style.backgroundImage])

   
 
    return (
        <animated.div style={props} className="script-bf-box"  >
            <div  style={style}></div>
        </animated.div>
    )
}
