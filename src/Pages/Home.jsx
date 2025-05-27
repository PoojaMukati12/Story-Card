import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from '../Components/StoryCard';

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction')
      .then(res => {
        setStories(res.data);
      })
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {stories.length > 0 ? (
        stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))
      ) : (
        <p>Loading stories...</p>
      )}
    </div>
  );
};

export default Home;
