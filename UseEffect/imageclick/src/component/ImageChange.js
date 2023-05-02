import React, { useState } from 'react';
import image from './images/image.jpg'
import image2 from './images/image2.jpg'
import './ImageChange.css'

function ImageToggle() {
  const [imageSrc, setImageSrc] = useState(image);

  function handleButtonClick() {
    if (imageSrc === image) {
      setImageSrc(image2);
    } else {
      setImageSrc(image);
    }
  }

  return (
    <div id='parentbox'> 
      <button onClick={handleButtonClick}>Toggle Image</button>
      <img id='imageBox' src={imageSrc} alt="Toggleable Image" />
    </div>
  );
}

export default ImageToggle;
