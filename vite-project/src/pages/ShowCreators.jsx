import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import '../App.css';

const ShowCreators = ({ creators }) => {
  return (
    <div className="creator-list">
      <Link to="/add" className="add-link">
        Add New Content Creator
      </Link>
      <div className="cards-container">
        {creators.length === 0 ? (
          <p className="no-creators-message">No content creators found.</p>
        ) : (
          creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowCreators;

