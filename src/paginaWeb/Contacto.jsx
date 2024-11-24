import React from 'react';
import { useParams } from 'react-router-dom';
import { contactos } from './contact'; 

const Contacto = () => {
  const { nombre } = useParams(); 
  const contacto = contactos[nombre];

  if (!contacto) {
    return <p>Contacto no encontrado</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{contacto.nombre}</h1>
      <img
        src={contacto.avatar}
        alt={`Avatar de ${contacto.nombre}`}
        style={{ borderRadius: '0%', width: '100px', height: '100px' }}
      />
      <p>Nombre: {contacto.nombre}</p>
    </div>
  );
};

export default Contacto;
