import {useContext} from 'react'
import { UserContext } from './App';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const navigate = useNavigate();

    const {state, dispatch} = useContext(UserContext);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("facInfo");
    localStorage.removeItem("admnInfo");
    dispatch({type:'USER',payload:false});
    navigate("/");
    return(
        <h3>Logout page</h3>
    );
}

export default Logout;