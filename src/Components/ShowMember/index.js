import React from 'react'
import styles from './ShowMember.module.scss'
import { useSelector } from 'react-redux'
import Card from './Card'
import ScrollText from './ScrollText'
import Particle from '../Particle'
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
                            
                               <Particle/>

                <div className={styles.itemContainer}>
                {displayImages.map((e,i)=><div key={"member"+i} className={styles.item}>
                    <>
                       
                        <Card hoverImage={e.hoverImage} text={e.name} moveMore={i%2===1} image={e.image}/>
                    </>
                </div>)}

                </div>
            </div>
        )
    }
    return <></>
}
