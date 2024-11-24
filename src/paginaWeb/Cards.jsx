import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css';

function Tarjeta({ titulo, texto, imagen, botonTexto }) {
  return (
    <Card className="pokemon-card">
      <Card.Img variant="top" src={imagen} className="pokemon-image" />
      <Card.Body>
        <Card.Title className="pokemon-title">{titulo}</Card.Title>
        <Card.Text className="pokemon-text">{texto}</Card.Text>
        <Button variant="primary" className="pokemon-button">
          {botonTexto}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
