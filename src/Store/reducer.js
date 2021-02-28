import {combineReducers} from 'redux'


const initState={
    
   img:[],
   index:false,
   currentIndex:{}
}


const galery=(state=initState,action)=>{
    if(action.type==='updateImg')
    {
        console.log('update img');
        
        return {...state,img:action.payload}
    }else if(action.type==='updateIndex'){
        return {...state,currentIndex:action.payload,index:true}
    }
    else if (action.type==="toggleIndex")
    {
        return {...state,index:false}
    }


    return state
}

export default combineReducers({state:galery})