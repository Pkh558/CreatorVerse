import React, { useState } from 'react';
import { supabase } from '../client';
import '../App.css';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('creators').insert([
      { name, url, description, imageURL }
    ]);

    if (error) {
      console.error('Error adding creator:', error);
    } else {
      setName('');
      setUrl('');
      setDescription('');
      setImageURL('');
    }
  };

  return (
    <div className="add-form">
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
          Add Creator
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
