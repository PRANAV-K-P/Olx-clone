import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../Components/Login/Login';
import {AuthContext} from '../store/Context'

const LoginPage=()=> {
  const {user} = useContext(AuthContext);
  const history = useHistory()
  
  user? history.push("/") : <></> 
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
