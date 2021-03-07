
import  { useState,useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import styles from 'styles/FlipCard.module.scss'
import {useSelector} from 'react-redux'
import {getImgPath} from 'lib/ulti'
export default function FlipCard({order,id}) {
  const [flipped, set] = useState(false)
  const [current,setCurrent]=useState(()=>{
      return order?Math.floor(Math.random()*25):Math.floor(Math.random()*20)+25
  })
  const images=useSelector(state=>state.img).filter(e=>e.view==='girl' || e.view==='boy')
 
  useEffect(()=>{
     const a= setInterval(()=>{
         if(window.scrollY<(window.innerHeight-300)){
            set(a=>!a) 
         }
        
      },750 + Math.random()*1000)

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
    <div key={id} className="Flip" >
        <div  onClick={() =>{set(state => !state);console.log(flipped);}} className={`${styles.card} ${flipped?styles.flip:''}`}>
        <div className={styles.front} style={{backgroundImage:`url("${images[current].img[0].url}")`}}></div>
        <div className={styles.back} style={{backgroundImage:`url("${images[(current+1)%images.length].img[0].url}")`}}>
        </div>
        </div>
    </div>
  )
}