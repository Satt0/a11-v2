import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "styles/FlipCard.module.scss";
import { getImgPath } from "lib/ulti";

export default function App() {
  const img = useSelector((state) => state.bg);
  const [width,setWidth]=useState(0);
  const [index, set] = useState(() => {
    if (img.length) {
      return Math.floor(Math.random() * img.length);
    }
    return 0;
  });
useEffect(()=>{
  const onResize=()=>{
    if(typeof window !== undefined){
      const width=window.innerWidth;
      console.log(width);
      setWidth(width)
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
      key={"randomize" + img[index].id}
      className={styles.bg}
      style={{width:width*img.length,animationDuration:`${img.length*30}s`}}
    >
      {img.map((e,i)=>{
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
