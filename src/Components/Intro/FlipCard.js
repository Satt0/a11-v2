import  { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import styles from 'styles/FlipCard.module.scss'
const slides = [
  { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
  { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
  { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
  { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
]

export default function App () {
    const img=useSelector(state=>state.img)?.filter(e=>e.view==='moment' || e.view==='teacher')
  const [index, set] = useState(0)
 
  useEffect(() =>{
    const a= setTimeout(() => set(state => (state + 1) % img.length), 4000)
    return ()=>{
        clearTimeout(a)
    }
  }, [index])
  return (<div
  key={"randomize"+img[index].id}
    class={styles.bg}
    style={{ backgroundImage: `url("${img[index].img[0].url}")` }}
  />)
    
  
}
