import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import { getUser } from '../services/userAPI';

function Header() {
  
  const [stateCarregando, setStateCarregando] = useState('true');
  const [stateName, setStateName] = useState('')

  useEffect(() => {
    
    getUser().then((elm) => setStateName(elm.name))
    
    setStateCarregando(false)


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