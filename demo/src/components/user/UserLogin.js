import { InputContent, MyButton} from './UserStyles'
import Card from '../../UI/Card'
import { useState } from 'react'
import { loginAction } from '../../store/loginactions'
import { useDispatch } from 'react-redux' 
const UserLogin=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch();
    const UsernameHandler=(e)=>{
        setUsername(e.target.value)
    }
 const passwordChangeHandler=(e)=>{
        setPassword(e.target.value)
    }
    const submitCreds=()=>{
        console.log(username)
        console.log(password)
        dispatch(loginAction(username,password))
 
    }
    return(
        <Card>
            <InputContent type="text" onChange={UsernameHandler} placeholder="Username" />
            <InputContent type="password" placeholder="Password" onChange={passwordChangeHandler}/>
            <MyButton onClick={submitCreds}>Login</MyButton>
        </Card>
    )
}

export default UserLogin;