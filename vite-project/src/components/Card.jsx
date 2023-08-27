import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Card = ({ creator }) => {
  return (
    <Link to={`/creators/${creator.id}`} className="card-link">
      <div className="card">
        {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="img" />}
        <h3 className="name">{creator.name}</h3>
        <p className="description">{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="profile-link">
          Visit Profile
        </a>
        <Link to={`/creators/${creator.id}/edit`} className="edit-link">Edit Creator</Link>
      </div>
    </Link>
  );
};

export default Card;
