import {CombineReducer} from 'react-redux'


const initState={
    view:'Teachers',
    slide:3
}


const galery=(state=initState,action)=>{
    if(action.type==='updateView')
    {
        return state
    }


    return state
}

export default CombineReducer({state:galery})