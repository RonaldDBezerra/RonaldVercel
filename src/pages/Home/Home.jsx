import React from 'react';
import Header from '../../componentes/Header';
import Main from '../../componentes/Main';
import Projetos from '../../componentes/Projetos';
import Footer from '../../componentes/Footer';

function Home() {
    return (
      <>
        <Header />
        <Main />
        <Projetos />
        <Footer />
      </>
    );
  }

export default Home;