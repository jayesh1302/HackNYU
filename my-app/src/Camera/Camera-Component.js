import React, { useState, useRef } from 'react';

const Camera = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleStartClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing camera', err);
    }
  };

  const handleStopClick = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  };

  const handleCaptureClick = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const capturedImage = canvasRef.current.toDataURL('image/png');
    setImageSrc(capturedImage);
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay />
      <button onClick={handleStartClick}>Start Camera</button>
      <button onClick={handleStopClick}>Stop Camera</button>
      <button onClick={handleCaptureClick}>Take Picture</button>
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Captured" width="640" height="480" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
    </div>
  );
};

export default Camera;