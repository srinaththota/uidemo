import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EachTech from './EachTech'
import { fetchData } from "../../store/fetchdata/fetchActions"
import TechnologiesCard from "../../UI/TechnologiesCard";

const Technologies=()=>{
   const techData=useSelector(state=>state.data.technologies)
 const fetchDispatch=useDispatch();
    useEffect(()=>{
        fetchDispatch(fetchData())
    })
return (
    <TechnologiesCard>
    {techData.map(eachtech=>{
        return <EachTech techno={eachtech.name} key={eachtech.id} id={eachtech.id}/>
    })}
    </TechnologiesCard>
)
}

export default Technologies;