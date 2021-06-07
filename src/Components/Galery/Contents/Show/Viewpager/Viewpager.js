import React from 'react'
import Carousel from './Carousel/Carousel'
import {useSelector} from 'react-redux'
import Infor from './Infor/Infor'
export default function Viewpager({length,view,img}) {
  const [index,setIndex] = React.useState(false)
  const [number,setNumber]=React.useState(0)
  const [data,setData]=React.useState(null)
  const handleIndex=(num)=>{
    setIndex(true)
    setNumber(num)
  }
  React.useEffect(()=>{
      if(img?.length){
          const data=[...img]
    for(let i=data.length-1;i>=0;i--){
      const index=Math.floor(Math.random()*i)
      const temp=data[i]
      data[i]=data[index]
      data[index]=temp;
  
   }  
   setData(data)

      }
  },[img])
 if(data){
  return <>
   {/* <h1 className="title-header text-center">##Member</h1> */}
  <div className="Viewpager">
  {!index? <Carousel handleIndex={handleIndex} view={view} img={data} length={length}/>:<Infor handleIndex={handleIndex} closeIndex={setIndex} index={number}/>}
</div>
  </>
 }
 return <p>loading</p>
}
