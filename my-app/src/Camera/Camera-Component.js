import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Webcam from "react-webcam";

const Camera = () => {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const videoConstraints = {
    height:420,
    width: 420,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam style={{marginTop : '33px'}}
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          {/* <div class="photo-button"> */}
          {/* <div class="circle"></div> */}
           {/* <div class="ring"></div> */}
           <button class="circular-button"></button>

          {/* <button onClick={capture}>Capture photo</button> */}
          {/* </div> */}
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );

  // const [imageSrc, setImageSrc] = useState(null);
  // const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  // const [isCameraOn, setIsCameraOn] = useState(false);


  // useEffect(async () => {
  //   try {
  //     console.log("lasjkfhd")
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     videoRef.current.srcObject = stream;
  //     setIsCameraOn = true;
  //   }
  //   catch (err) {
  //         console.error('Error accessing camera', err);
  //       }
  // });


  // const handleStartClick = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     videoRef.current.srcObject = stream;
  //   } catch (err) {
  //     console.error('Error accessing camera', err);
  //   }
  // };

  // const handleCameraButtonClick = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     videoRef.current.srcObject = stream;
  //     setIsCameraOn(true);
  //   } catch (error) {
  //     console.error('Error accessing camera:', error);
  //   }
  // };
  // const handleStopClick = () => {
  //   const stream = videoRef.current.srcObject;
  //   const tracks = stream.getTracks();

  //   tracks.forEach((track) => {
  //     track.stop();
  //   });
  // };

  // const handleCaptureClick = () => {
  //   const context = canvasRef.current.getContext('2d');
  //   context.drawImage(videoRef.current, 0, 0, 640, 480);
  //   const capturedImage = canvasRef.current.toDataURL('image/png');
  //   setImageSrc(capturedImage);
  // };

  // return (
  //   <div>
  //     <button onClick={handleCameraButtonClick}>Start camera</button>
  //     {isCameraOn && <video ref={videoRef} autoPlay />}
  //   </div>
  // );

  // return (
  //   <div>
  //     <video ref={videoRef} width="640" height="480" autoPlay />
  //     <button onClick={handleStartClick}>Start Camera</button>
  //     <button onClick={handleStopClick}>Stop Camera</button>
  //     <button onClick={handleCaptureClick}>Take Picture</button>
  //     {imageSrc && (
  //       <div>
  //         <img src={imageSrc} alt="Captured" width="640" height="480" />
  //       </div>
  //     )}
  //     <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
  //   </div>
  // );
  // if(isCameraOn) {
  // return (
  //   <div>
  //     <video ref={videoRef} width="640" height="480" autoPlay/> 
  //   </div>
  // )
  // }
};

export default Camera;