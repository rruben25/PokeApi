import React from 'react';
import { Link } from 'react-router-dom';
import { contactos } from './contact';

const ContactoList = () => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.keys(contactos).map((nombre) => (
          <Link to={`/contactos/${nombre}`} key={nombre} style={{ margin: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={contactos[nombre].avatar}
                alt={`Avatar de ${contactos[nombre].nombre}`}
                style={{ borderRadius: '15%', width: '200px', height: '200px' }}
              />
              <p style={{ fontSize: '50px'}}>{contactos[nombre].nombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactoList;
