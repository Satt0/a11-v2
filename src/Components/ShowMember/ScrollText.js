import { max } from 'lodash'
import React from 'react'
import styles from './ShowMember.module.scss'
const bound=200

export default function ScrollText({text,isLeft}) {
    const ref=React.useRef()
    React.useEffect(()=>{
        const getElementOffset=(el)=>{
            return (e)=>{
                const thisEl=el.getBoundingClientRect()
            const windowsHeight=window.innerHeight;
           const offset=((thisEl.top/20));    
            if((windowsHeight +100 > thisEl.top) && (thisEl.bottom > -100)){
                let amount=offset 
                
                if(!isLeft) amount=amount* -1

                amount=amount>bound?bound:amount
                amount=amount<-bound?-bound:amount
                el.style.opacity='1'
                el.style.transform=`translateY(${Math.abs(amount)}px) translateX( ${amount}px)`
            }else{
                el.style.opacity=''
            }
            }
        }
        if(ref?.current){
            window.addEventListener('scroll',getElementOffset(ref.current))

        }

        return ()=>{
            if(typeof window){
                window.removeEventListener('scroll',getElementOffset)
            }
        }
    },[ref])
    return (
        <p  ref={ref} className={styles.ScrollText}>
            {text}
        </p>
    )
}
