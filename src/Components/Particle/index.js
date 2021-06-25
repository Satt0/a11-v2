import React from 'react'
import styles from './styles.module.scss'
export default function Particle() {
    const ptc=[1,2,3,4,5,6,7,8,9,10]

    return (
        <div className={styles.container}>
           {ptc.map((e,i)=><div key={'ptc-'+i} className={styles.ptc}></div>)}
                
        </div>
    )
}
