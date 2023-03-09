import React from 'react'
import { useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../contexts/LoginContext';

const Home = () => {
    const miUsuario = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(miUsuario.usuario==null){
          navigate('/login');
        }
      }, [miUsuario.usuario]);

  return (
    <div>Home</div>
  )
}

export default Home