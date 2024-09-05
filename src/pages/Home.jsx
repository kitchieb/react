import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/media');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="masonry-gallery">
      {images.map((image) => (
        <img key={image.id} src={image.source_url} alt="Gallery" />
      ))}
    </div>
  );
};

export default Home;