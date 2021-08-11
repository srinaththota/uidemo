import { useDispatch } from 'react-redux';
import { Div } from './EachTechStyles'
import { deleteData } from '../../store/fetchdata/fetchActions';
const EachTech=(props)=>{
const dispatch=useDispatch();
const deleteHandler=()=>{
    console.log("clicked")
    dispatch(deleteData(props.id))
}
    return(
        <Div onClick={deleteHandler}>
            {props.techno}
        </Div>
    )
}
export default EachTech;