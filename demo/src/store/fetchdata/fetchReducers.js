import * as actionTypes from '../actionTypes'
const initialState={
    technologies:[
        {id:1,name:"Java"},{id:2,name:"Node.js"},{id:3,name:"react.js"},{id:4,name:"Mongodb"},{id:5,name:"Azure"}],
    update:null
}

const fetchReducers=(state=initialState,action)=>{
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
    if(action.type===actionTypes.DELETE){
     
        return {
            ...state,
            technologies:state.technologies.filter((tech)=>tech.id !== action.payload)
        }
    }
    if(action.type===actionTypes.FETCH){
     
        return {
            ...state,
           // technologies:action.payload.data   need to enable once backend is ready
           technologies:state.technologies
        }
    }
    return state;
}

export default fetchReducers