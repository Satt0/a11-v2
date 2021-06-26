import React from 'react'
import styles from './ShowMember.module.scss'
import { useSelector } from 'react-redux'
import Card from './Card'
import ScrollText from './ScrollText'
export default function ShowMember() {
    const image=useSelector(state=>state.img)
    const [displayImages,setDisplayImage]=React.useState(null)
  
    React.useEffect(()=>{
            if(image.length){
                setDisplayImage(()=>{
                    const newState= image.filter(e=>e.view==='boy' || e.view==='girl').map(e=>({image:e.img[0].url,name:e.name,hoverImage:e?.mainImage?.url ||e.img[0].url }))
                    for (let i=newState.length-1;i>=0;i--){
                        let ranIndex=Math.floor(Math.random()*i);
                        const temp=newState[ranIndex]
                        newState[ranIndex]=newState[i]
                        newState[i]=temp
                    }
                    return newState

                })
            }
    },[image])
    if(displayImages){
        return (
            <div className={styles.container}>
                <div className={styles.itemContainer}>
                {displayImages.map((e,i)=><div className={styles.item}>
                    <div  className={styles.bg}>
                        <ScrollText isLeft={i%2===1} text={e.name}/>
                        <Card hoverImage={e.hoverImage} moveMore={i%2===1} image={e.image}/>
                    </div>
                </div>)}

                </div>
            </div>
        )
    }
    return <></>
}
