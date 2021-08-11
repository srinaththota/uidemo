import * as actionTypes from '../actionTypes'
export const fetchData=()=>{

    return dispatch=>{
        dispatch({
            type:actionTypes.FETCH,
            payload:'defg'
        })
    }
}
export const deleteData=(techid)=>{
    console.log(techid)
    return dispatch=>{
        console.log("in actions")
        dispatch({
            type:actionTypes.DELETE,
            payload:techid
        })
    }
}
export default fetchData;