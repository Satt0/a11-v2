import React from 'react'
import Carousel from './Carousel/Carousel'
import {useSelector} from 'react-redux'
import Infor from './Infor/Infor'
export default function Viewpager({length,view,img}) {
  const index = useSelector(state => state.index)
  const infor = useSelector(state => state.currentIndex)
  return <div className="Viewpager">
    {!index? <Carousel view={view} img={img} length={length}/>:<Infor index={infor}/>}
  </div>
}
