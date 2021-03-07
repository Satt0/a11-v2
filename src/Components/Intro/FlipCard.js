
import  { useState,useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import styles from 'styles/FlipCard.module.scss'
import {useSelector} from 'react-redux'
import {getImgPath} from 'lib/ulti'
export default function FlipCard({order}) {
  const [flipped, set] = useState(false)
  const [current,setCurrent]=useState(()=>{
      return order?Math.floor(Math.random()*25):Math.floor(Math.random()*20)+25
  })
  const images=useSelector(state=>state.img).filter(e=>e.view==='girl' || e.view==='boy')
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 50 }
  })
  useEffect(()=>{
     const a= setInterval(()=>{
         if(window.scrollY<(window.innerHeight-300)){
            set(a=>!a) 
                console.log('played')
         }
         else{
             console.log('paused');
         }
      },1000 + Math.random()*1000)

      return ()=>{
          clearInterval(a)
      }
  },[flipped])
  useEffect(()=>{
    if(flipped)
    {
        if(order){
            const a=(current +1)%25;
            setCurrent(a)
        }
        else{
            const a=(current+1)%20+25;
            setCurrent(a)
        }
    }
  },[flipped])
  return (
    <div className="Flip" onClick={() => set(state => !state)}>
      <a.div key={'hello-front'} class={`${styles.front} ${styles.c}`} style={{ opacity: opacity.interpolate(o => 1 - o), transform ,backgroundImage:`url("${getImgPath(images[current].img[0].url)}")`}} ><p>{images[current].name}</p></a.div>
      <a.div key={'hello-back'} class={`${styles.back} ${styles.c}`} style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`),backgroundImage:`url("${getImgPath(images[(current+1)%20 + 25].img[0].url)}")` }} ><p>{images[(current+1)%20 + 25].name}</p></a.div>
    </div>
  )
}