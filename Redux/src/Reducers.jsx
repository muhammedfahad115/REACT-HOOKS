import React from 'react'


export const counterReducer = (state=0,Action)=>{
  console.log(Action)
      switch(Action.type){
          case 'INCREMENT':
              return state + 1; 
          case 'DECREMENT':
              return state - 1;
          case 'CLEAR' :
            return state-state ;
          default :
          return state
      }
  }

export default counterReducer