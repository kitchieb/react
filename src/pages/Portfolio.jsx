import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/media');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div>
      <div id="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('category1')}>Category 1</button>
        <button onClick={() => setFilter('category2')}>Category 2</button>
      </div>
      <div id="portfolio-gallery" className="masonry-gallery">
        {images.filter((img) => filter === 'all' || img.category === filter).map((image) => (
          <img key={image.id} src={image.source_url} alt="Portfolio" />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
