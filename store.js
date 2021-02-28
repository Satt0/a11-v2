import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {
  img: [],
  index: false,
  currentIndex: 0,
}

const reducer = (state = initialState, action) => {
  if(action.type==='updateImg')
  {
      
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

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)



 
  if (typeof window === 'undefined') return _store

  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
