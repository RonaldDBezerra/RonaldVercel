import React, { useContext, useEffect, useState } from 'react';
import { createUser } from '../services/userAPI';
import context from '../../../context/context';
import { Navigate } from "react-router-dom";

function LoginTunes () {
    const {
      stateLogin, 
      setStateLogin,
      stateValorDoButao, 
      setStateValorDoButao,
      stateLoading, 
      setStateLoading,
      stateLoadingIn, 
      setStateLoadingIn,
    } = useContext(context);

    function analisaQuantidaDeLetras() {

    const NumeroMin = 3;

    if (stateLogin.length + 1 >= NumeroMin) {
      return setStateValorDoButao(false)
    }

    return setStateValorDoButao(true);

    }

    function handleChange({ target: { value } }, callBack) {
      callBack(value);

      analisaQuantidaDeLetras();
    }

    async function clickButtonUser (event) {
      event.preventDefault();
  
      setStateLoading(true)
  
      await createUser({ name: stateLogin });
  
      setStateLoading(false);
      setStateLoadingIn(true);

      console.log(stateLoadingIn)
    }


    return (
      <div data-testid="page-login">
        {
          (stateLoadingIn) &&  <Navigate to="/tunes/search" />
        }

        {
          (stateLoading) ? <span>Carregando...</span>
            : (
              <form>

                <input
                  type="text"
                  value={ stateLogin }
                  onChange={ (event) => handleChange(event, setStateLogin) }
                  name="login"
                  data-testid="login-name-input"
                />

                <button
                  disabled={ stateValorDoButao }
                  onClick={ clickButtonUser }
                  type="submit"
                  data-testid="login-submit-button"
                >
                  Entrar
                </button>

              </form>
            )
        }

      </div>

    );
  }

export default LoginTunes;