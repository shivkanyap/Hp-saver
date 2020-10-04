import {USER_REGISTER,USER_ERRORS} from './types'

export const userRegister=(user)=>async dispatch=>{
    try{
        const res=await  fetch('/register',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await res.json()
        dispatch({
            type:USER_REGISTER,
            payload:data
        })

    }
    catch(err){
        dispatch({
            type:USER_ERRORS,
            payload:err.response.statusText
        })

    }

}