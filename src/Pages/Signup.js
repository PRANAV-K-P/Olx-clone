import React, { useContext } from 'react';
import Signup from '../Components/Signup/Signup';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../store/Context'

function SignupPage() {
  const {user} = useContext(AuthContext);
  const history = useHistory()
  user? history.push("/") : <></> 
  return (
    <div>
      <Signup />
    </div>
  );
}

export default SignupPage;
