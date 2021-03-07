
import  { useState,useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import styles from 'styles/FlipCard.module.scss'
import {useSelector} from 'react-redux'
import {getImgPath} from 'lib/ulti'
export default function FlipCard({start,end}) {
  const [flipped, set] = useState(false)
  const [current,setCurrent]=useState(()=>{
      if(start && end ){
            return Math.floor(Math.random()*(end-start))+start
            
      }
      else{
          return 0;
      }
  })

  const images=useSelector(state=>state.img).filter(e=>e.view==='girl' || e.view==='boy')
 
  useEffect(()=>{
     const a= setInterval(()=>{
         if(window.scrollY<(window.innerHeight-300)){
            set(a=>!a) 
         }
        
      },1050 + Math.random()*1000)

      return ()=>{
          clearInterval(a)
      }
  },[flipped])
  useEffect(()=>{
    if(flipped)
    {
        setCurrent(a=>getNext(start,end,a,2))
    }
  },[flipped])
  return (
    <div key={start+'Flip-key'} className="Flip" >
        <div  onClick={() =>{set(state => !state);console.log(flipped);}} className={`${styles.card} ${flipped?styles.flip:''}`}>
        <div className={styles.front} style={{backgroundImage:`url("${images[current].img[0].url}")`}}></div>
        <div className={styles.back} style={{backgroundImage:`url("${images[getNext(start,end,current,1)].img[0].url}")`}}>
        </div>
        </div>
    </div>
  )
}

function getNext(start,end,current,skip){
    return current+skip>=end?start:current+skip
}