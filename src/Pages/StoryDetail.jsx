import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TabView from '../Components/TabView';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then(res => setStory(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!story) return <p className="p-4">Loading story...</p>;

  return (
    <div className="p-4">
      <img
        src={story.Image ? `https://ik.imagekit.io/dev24/${story.Image}` : 'https://via.placeholder.com/600x400?text=No+Image'}
        alt={story.Title}
        className="w-full max-h-[400px] object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{story.Title}</h1>
      <TabView story={story} />
    </div>
  );
};

export default StoryDetail;
