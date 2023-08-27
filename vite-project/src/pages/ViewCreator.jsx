import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import '../App.css';

const ViewCreator = () => {
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', creatorId)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [creatorId]);

  if (!creator) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="card">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="img" />
      )}
      <h3 className="name">{creator.name}</h3>
      <p className="description">{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        Visit Profile
      </a>
      <Link to={`/creators/${creator.id}/edit`} className="edit-link">
        Edit Creator
      </Link>
      <Link to="/" className="return-button">
        Return to Home
      </Link>
    </div>
  );
};

export default ViewCreator;