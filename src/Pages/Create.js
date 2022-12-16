import React, { Fragment, useContext } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../store/Context'

const CreatePage = () => {
  const {user} = useContext(AuthContext);
  const history = useHistory()
  user? <></> : history.push("/") 
  return (
    <Fragment>
      <Header />
      <Create/>
    </Fragment>
  );
};

export default CreatePage;
