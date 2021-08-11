import * as actionTypes from './actionTypes'
const initialState={
    token:null,
    details:[],
    errorStatus:null
}

const loginReducer=(state=initialState,action)=>{
    if(action.type===actionTypes.LOGIN){
        return {
            ...state,
            token:action.payload
        }
    }
    if(action.type===actionTypes.ERROR){
        return {
            ...state,
            errorStatus:action.payload
        }
    }
    if(action.type===actionTypes.LOGOUT){
        return initialState
    }
    if(action.type===actionTypes.ERRORDISPLAY){
        return {
            ...state,
            errorStatus:null
        }
    }
    return state;
}

export default loginReducer