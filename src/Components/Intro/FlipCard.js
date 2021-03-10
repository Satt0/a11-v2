import  { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import styles from 'styles/FlipCard.module.scss'


export default function App () {
    const img=useSelector(state=>state.bg)
  const [index, set] = useState(0)
 
  useEffect(() =>{
    const a= setTimeout(() => set(state => (state + 1) % img.length), 3000)
    return ()=>{
        clearTimeout(a)
    }
  }, [index])
  return (<div
  key={"randomize"+img[index].id}
    className={styles.bg}
    style={{ backgroundImage: `url("${img[index].bg[0].url}")` }}
  >
      <div style={{ backgroundImage: `url("${img[(index+1)%img.length].bg[0].url}")` }}></div>

  </div>)
    
  
}
