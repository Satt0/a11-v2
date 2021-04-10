import {makeStyles} from '@material-ui/core'
import styles from './Display.module.scss'
import Image from 'next/image'
// const useStyles=makeStyles((theme)=>({
//     main:{
//         width:800,
//         margin:'0 auto',
//         paddingTop:theme.spacing(3),
//         height:700
//     }
// }))
const Display=()=>{
// const style=useStyles()
return (<div id="story" className={styles.container} >

        <div className={styles.paragraph}>
           
            <div className={styles.group}>
               
               <p className="text-center"> <strong style={{fontWeight:700,fontSize:'1.8rem'}} className={styles.title}>We are A11 Family!</strong></p>
            <p style={{color:'red'}}>This is under contruction</p>
            </div>
        </div>
       
</div>)
}

export default Display