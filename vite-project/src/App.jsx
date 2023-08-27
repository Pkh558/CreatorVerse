import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import './App.css'
import { supabase } from './client';

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators creators={creators} />} />
        <Route path="/creators/:creatorId" element={<ViewCreator />} />
        <Route path="/creators/:creatorId/edit" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </Router>
  );
}

export default App;

