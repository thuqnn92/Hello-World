import React from 'react';

const ImageList = props => {
  if (!props.images) return null;
  const images = props.images.map(image => {
    return <img src={image.urls.small} alt="images" />;
  });

  return <div>{images}</div>;
};

export default ImageList;
