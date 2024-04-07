import React from 'react';
import { Card, Form } from 'react-bootstrap';

const CardComponent = ({ imageUrl, heading, content, isSelected, handleCardClick }) => {
  return (
    <Card
      className={`text-center card-container ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <div className="image-container">
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          className="card-img"
          style={{ height: '200px', width: 'auto', objectFit: 'cover' }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title style={{fontWeight:"bold",fontsize:"15px"}}>{heading}</Card.Title>
        {isSelected && <Card.Text>{content}</Card.Text>} {/* Conditionally render content */}
        <Form.Check
          type="checkbox"
          checked={isSelected}
          onChange={handleCardClick}
          className={`mt-auto mx-auto custom-checkbox ${isSelected ? 'selected-checkbox' : ''} ${!isSelected ? 'unselected-checkbox' : ''}`}
        />
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
