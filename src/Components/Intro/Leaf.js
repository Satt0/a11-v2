import React from 'react'
import style from './Leaf.module.scss'
export default function Leaf() {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
    const Leaf1=()=><img src='/leaf/leaf1.png' width="70px"/>
    const Leaf2=()=><img src='/leaf/leaf2.png' width="70px"/>
    return (
        <div className={style.snow}>
 
        
      {arr.map((e,i)=><li key={"snowflake"+i} className='snowflake'>{i%2?<Leaf1/>:<Leaf2/>}</li>)}
</div>
    )
}
