import {USER_REGISTER,USER_ERRORS}  from '../actions/types'

const initialState={
   users:null 
}
export default(state=initialState,action)=>{
    switch(action.type){
        case USER_REGISTER:{
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        }
        default:
            return state
    }
}
