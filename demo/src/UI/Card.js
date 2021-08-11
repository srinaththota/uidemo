import { useDispatch } from 'react-redux';
import {Div} from './CardStyles'
import { errorDisplay } from '../store/loginactions'
const Card=(props)=>{
  const disableErrMessage=useDispatch();
  const errorDisplayHandler=()=>{
      disableErrMessage(errorDisplay())
  }
 return(   <Div onClick={errorDisplayHandler}>
        {props.children}
    </Div>)
}

export default Card;