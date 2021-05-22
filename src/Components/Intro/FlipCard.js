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
  const [preload,setPreload]=useState([])
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
      if(arr.length>2){
        setPreload(arr)
        setData([arr[0],arr[1]])
      }
      else{
        setData(arr)
      }
    }
  },[img])
  useEffect(()=>{
      let a
    if(preload.length>2){
      a=new Array(preload.length-2); 
          for(let i = 0 ; i < a.length;i++){
            a[i]=setTimeout(()=>{
                setData(state=>([...state,preload[(i+2)%preload.length]]))
               
            },(i+1)*5000)
          }
      }
      return ()=>{
        if(a){
          a.forEach(timeout=>{
            clearTimeout(timeout)
          })
        }
      }
  },[preload])
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
      style={{width:width*img.length,animationDuration:`${img.length*30}s`}}
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
