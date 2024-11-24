import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Generacion from './Generacion';
import ContactoList from './ContactoList';
import Contacto from './Contacto';

function Contenido() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/gen1" element={<Generacion inicio={1} fin={151} />} />
          <Route path="/gen2" element={<Generacion inicio={152} fin={251} />} />
          <Route path="/gen3" element={<Generacion inicio={252} fin={386} />} />
          <Route path="/contactos" element={<ContactoList />}/>
            <Route path=":nombre" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
}

function Home() {
  return <h2>Bienvenido a la PokeApi de Ruben. En esta pagina encontraras las primeras 3 generaciones de los pokemon donde aparecerán 10 pokemons completamente aleatorios, los cuales al refrescar la pagina cambiaran a otros 10 completamente aleatorios</h2>
}

export default Contenido;
