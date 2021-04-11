
import styles from './Display.module.scss'

import {useColor} from 'lib/hook'

const Display=()=>{
const color=useColor()
return (<div id="story" className={styles.container} 

>

        <div className={styles.paragraph} >
           
            <div className={styles.group}>
               
               <p className="text-center"> <strong style={{fontWeight:700,fontSize:'1.8rem'}} className={styles.title}>We are A11 Family!</strong></p>
            <p style={{color:'red'}}>This is under contruction</p>
            </div>
        </div>
       
</div>)
}

export default Display