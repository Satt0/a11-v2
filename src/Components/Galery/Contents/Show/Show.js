import React from "react";
// import Data from './Slide'
import Viewpager from "./Viewpager/Viewpager";
import { useSelector } from "react-redux";
export default function Show({ length, view }) {
  const img = useSelector((state) => {
    const data=state.img.filter((e) => e.view === view)
   if(data.length){
    for(let i=data.length-1;i>=0;i--){
      const index=Math.floor(Math.random()*i)
      const temp=data[i]
      data[i]=data[index]
      data[index]=temp;
  }
   }
   console.log('testing img');
    return data
  });

  return (
    <div className="Show">
      {img.length ? <Viewpager img={img} length={length} view={view} /> : <></>}
    </div>
  );
}
