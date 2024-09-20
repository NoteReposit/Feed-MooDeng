import React, { useState } from 'react';

function DogImage() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <img
      src="https://your-dog-image-url.jpg" // เปลี่ยนเป็น URL รูปสุนัขของคุณ
      alt="A cute dog"
      style={{
        width: isEnlarged ? '300px' : '200px', // ปรับขนาดตามต้องการ
        cursor: 'pointer'
      }}
      onClick={handleImageClick}
    />
  );
}

export default DogImage;