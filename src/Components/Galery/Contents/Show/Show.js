import React from 'react'
// import Data from './Slide'
import Viewpager from '../Viewpager/Viewpager'
export default function Show({length,view}) {

    
 
    return (
        <div className="Show">
       
       <Viewpager length={length} view={view}/>
        </div>
    )
}
