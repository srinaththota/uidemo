import { useDispatch, useSelector } from 'react-redux' 
import UserLogin from '../user/UserLogin'
import {Header, Link, LogoutBtn} from './LayoutStyles'
import Technologies  from '../../container/technologies/Technologies'
import { logout } from '../../store/loginactions'
const Layout =()=>{
   const token=useSelector(state=>state.login.token)
   const errorStatus=useSelector(state=>state.login.errorStatus)
    const logoutDispatch=useDispatch();
   const logoutHandler=()=>{
        logoutDispatch(logout())
   }
return(
    <>
    <Header>
     
     <Link>Wipro Demo</Link>
    <Link>{token && <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>}</Link>
        </Header>
        <br />
        {!token && <UserLogin />}
        {token && <Technologies />}
        {errorStatus && <h1>{errorStatus}</h1>}

        </>
)
}

export default Layout;