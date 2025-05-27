import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
  const imageUrl = story?.Image
    ? `https://ik.imagekit.io/dev24/${story.Image}`
    : 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <Link to={`/story/${story._id}`} className="block border rounded shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={imageUrl} alt={story.Title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{story.Title}</h2>
        <p className="text-gray-600">{story.Author}</p>
      </div>
    </Link>
  );
};

export default StoryCard;
