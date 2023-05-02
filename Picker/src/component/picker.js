import React, { useRef } from 'react';
import './picker.css'


function FilePickerButton() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button id='button' onClick={handleClick}>Choose File</button>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
    </div>
  );
}
export default FilePickerButton;