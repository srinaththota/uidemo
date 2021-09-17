import axios from 'axios'
import * as actionTypes from './actionTypes'
export const loginAction=(username,password)=>{
console.log(username,password)
    return async dispatch=>{

        try{
         const responseData=await axios.post(process.env.REACT_APP_LOGIN + "/login",{
                
                    username:username,
                    password:password
                }
            )
        console.log(responseData)
         dispatch({
             type:actionTypes.LOGIN,
             payload:responseData.data.token
         })
        }catch(err){
            console.log(err.message)
            dispatch({
              //  type:actionTypes.ERROR,
              //  payload:err.message
                     type:actionTypes.LOGIN,
                    payload:"abcdefghijk"
            })
        }
        
    }
}

export const logout=()=>{

    return dispatch=>{
        dispatch({
            type:'LOGOUT'
        })
    }
}

export const errorDisplay=()=>{
    return dispatch=>{
        dispatch({
            type:actionTypes.ERRORDISPLAY
        })
    }
}