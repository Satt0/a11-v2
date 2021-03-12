import React from 'react'
import {useSelector} from 'react-redux'
import styles from 'styles/Home.module.css'
export default function Ending1() {
    const theme=useSelector(state=>state.theme);
    const curTheme=useSelector(state=>state.currentTheme)
    return (<>
        <div className="Ending end1"
        
            style={{background:`linear-gradient(360deg,${theme[curTheme]},.5),hsla(0,0%,100%,.8) 65%)`,}}
        >
            <div className="line-border"></div>
        <h2 className="h4">-The End-</h2>
        <div className={styles.bg}></div>
        <h5>last updated: {(new Date()).toUTCString().substring(0,16)}</h5>
        </div>
       
        </>
    )
}
