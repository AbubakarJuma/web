import React from 'react';
import "./Gallery.css"

const Gallery = () => {
  // Define an array of image objects with descriptions
  const images = [
    {
      id: 1,
      src: '/images/school1.jpg',
      description: 'Beautiful landscape view',
    },
    {
      id: 2,
      src: '/images/school2.jpg',
      description: 'Cute puppy playing in the park',
    },
    {
      id: 3,
      src: '/images/school3.jpg',
      description: 'Delicious gourmet food',
    },
    {
      id: 4,
      src: '/images/school4.jpg',
      description: 'Stunning architecture',
    },
    {
        id: 5,
        src: '/images/school5.jpg',
        description: 'Stunning architecture',
      },
      {
        id: 6,
        src: '/images/school6.jpg',
        description: 'Stunning architecture',
      },
      {
        id: 7,
        src: '/images/school7.jpg',
        description: 'Stunning architecture',
      },
      {
        id: 8,
        src: '/images/school8.jpg',
        description: 'Stunning architecture',
      },
      {
        id: 9,
        src: '/images/school9.jpg',
        description: 'Stunning architecture',
      },
    // Add more images as needed
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.description} className="gallery-image" />
          <p className="image-description">{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
