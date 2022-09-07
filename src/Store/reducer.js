import Action from "./action.js";

const defaultstate={
  joke:'',
  error:false,
  message:''
}

const jokeReducer=(state=defaultstate,action)=>{
switch(action.type){
 
  case Action.FETCH_SUCCESS:
  return {...state, joke:action.payload.joke ,error:false,message:''};
   
   case Action.FETCH_FAILED:
   return {...state, joke:'', error:true, message:''}
   
   default:
   return state
}
}
export default jokeReducer;