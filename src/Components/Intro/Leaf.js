import React,{useState,useEffect} from 'react'
import style from './Leaf.module.scss'
export default function Leaf() {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
    const [leaf, setLeaf] = useState(false);
    useEffect(() => {
      const handler = () => {
        if (window.innerWidth > 900) {
          setLeaf(true);
        } else {
          setLeaf(false);
        }
      };
      window.addEventListener("resize", handler);
      handler();
      return () => {
        window.removeEventListener("resize", handler);
      };
    }, []);
    const Leaf1=()=><img src='/leaf/leaf1.png' width="70px"/>
    const Leaf2=()=><img src='/leaf/leaf2.png' width="70px"/>
    if(leaf){
        return (
            <div className={style.snow}>
     
            
          {arr.map((e,i)=><li key={"snowflake"+i} className={style.snowflake}>{i%2?<Leaf1/>:<Leaf2/>}</li>)}
    </div>
        )
    }
    return <div className={style.snow}></div>
}
