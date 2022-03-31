import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import { getUser } from '../services/userAPI';

function Header() {
  
  const [stateCarregando, setStateCarregando] = useState(true);
  const [stateName, setStateName] = useState('')

  useEffect(() => {

    const getUsers = async () => {
      const infoUsuario =  await getUser() 
      setStateName(infoUsuario.name)
      setStateCarregando(false)
    }
    
    getUsers()


  }, [])

return (
  <header data-testid="header-component">
    <Link  to="/search" data-testid="link-to-search">
      Pesquisa
    </Link >

    <Link  to="/favorites" data-testid="link-to-favorites">
      Favorito
    </Link >

    <Link  to="/profile" data-testid="link-to-profile">
      Meu perfil
    </Link >
    {
      (stateCarregando) ? <span>carregando...</span> : <span data-testid="header-user-name">{stateName}</span>
    }
  </header>
);
}

export default Header