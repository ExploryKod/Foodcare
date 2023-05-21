import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/images_names');
        if (response.ok) {
          const data = await response.json();
          setImageList(data.images);
        } else {
          console.error('Error fetching images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
    <h1>Image Gallery</h1>
    <div className="upload-image-gallery">
      {imageList.filter((image, index)=> index < 10).map((image, index) => (
        <img key={index} src={`http://localhost:5000/uploads/${image}`} alt={`${index}`} />
      ))}
    </div>
    </>
  );
};

export default ImageGallery;

