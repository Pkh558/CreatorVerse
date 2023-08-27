import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import '../App.css';

const EditCreator = () => {
  const { creatorId } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

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
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL || '');
      }
    }

    fetchCreator();
  }, [creatorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('creators')
      .update({ name, url, description, imageURL })
      .eq('id', creatorId)
      .then(navigate('/'));

    if (error) {
      console.error('Error updating creator:', error);
    } else {
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', creatorId)
      .then(navigate('/'));

    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      navigate('/');
    }
  };


  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="url"
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Update Creator
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
