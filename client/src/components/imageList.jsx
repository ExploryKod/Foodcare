import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images_names`);
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
        <h2 className="category-text">Vos images</h2>
        <div className="upload-image-gallery">
          {imageList.filter((image, index)=> index < 10).map((image, index) => (
            <div className={"upload-list__image-wrapper"}>
              <img key={index} src={`${process.env.REACT_APP_API_URL}/uploads/${image}`} alt={`${index}`} />
            </div>
          ))}
        </div>
      </>
  );
};

export default ImageGallery;

