import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "styles/FlipCard.module.scss";
import { getImgPath } from "lib/ulti";

export default function App() {
  const img = useSelector((state) => {
    
    const data=state.bg
    if(data.length){
     for(let i=data.length-1;i>=0;i--){
       const index=Math.floor(Math.random()*i)
       const temp=data[i]
       data[i]=data[index]
       data[index]=temp;
   }
    }
    
     return data
  });
  const [data,setData]=useState([])
  const [width,setWidth]=useState(0);

  useEffect(()=>{
    if(img.length){
      let arr=[...img]
      for(let i=arr.length-1;i>=0;i--){
          const index=Math.floor(Math.random()*i);
          const temp=arr[i]
          arr[i]=arr[index]
          arr[index]=temp;
      }
      setData(arr)

    }
  },[img])
useEffect(()=>{
  const onResize=()=>{
    if(typeof window !== undefined){
      const width=window.innerWidth;
      
      setWidth(Math.max(width,450))
    }
  }
    window.addEventListener('resize',onResize)
    onResize()
    return ()=>{
      window.removeEventListener('resize',onResize)
    }
  
},[])

  return (
    <div
     
      className={styles.bg}
      style={{width:width*img.length,animationDuration:`${data.length*30}s`}}
    >
      {data.map((e,i)=>{
        return (<div
          key={"bg-carousel-"+i}
          className={styles.itemBg}
          style={{
            left:i*width,
            width:width,
            overflow: "hidden",
            backgroundImage: `url("${getImgPath(
              e.bg[0].url
            )}")`,
          }}
        ></div>)
      })}
    </div>
  );
}
