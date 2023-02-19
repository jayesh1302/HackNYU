import smilePhoto from "../assets/smilePhoto.png";
import feed1 from "../assets/feeding_1.png";
import feed2 from "../assets/feeding_2.png";
import feed3 from "../assets/feeding_3.png";
import './Photo.css';
// Timer imports
import React, { useState, useEffect } from "react";


function Photo() {
  const [seconds, setSeconds] = useState(10 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div className="photo-container">

<div className="timer-container">
      <div className="timer-text">
        {minutes < 10 ? "0" + minutes : minutes}:
        {remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}
      </div>
    </div>
        <div className="frame">
          <span className="lori">Lori</span>
          <img className="smilePhoto" src={smilePhoto}/>
          <span className="meeting-my-old-time">
          Always find a reason to <span style={{color: "red"}}>smile</span>. It may not add years to your life but will surely add life to your years...
          </span>
        </div>
        <div className="frame">
          <span className="lori">Elaine</span>
          <img className="smilePhoto" src={feed1}/>
          <span className="meeting-my-old-time">
          "Nothing makes me <span style={{color: "red"}}>smile</span> quite like a fresh cup of boba tea! It's the perfect pick-me-up to brighten up my day and add a little sweetness to my life. Cheers to boba tea and all the happy moments it brings!"
          </span>
        </div>
        <div className="frame">
          <span className="lori">Alyssa</span>
          <img className="smilePhoto" src={feed2}/>
          <span className="meeting-my-old-time">
          "True happiness is when you're surrounded by the people you love and cherish the most. With them by your side, every moment is filled with laughter, joy, and plenty of reasons to <span style={{color: "red"}}>smile</span>. Here's to lifelong friendships and the <span style={{color: "red"}}>smiles</span> they bring to our lives!"
          </span>
        </div>
        <div className="frame">
          <span className="lori">Marie</span>
          <img className="smilePhoto" src={feed3}/>
          <span className="meeting-my-old-time">
          "There's something about the beauty and fragrance of flowers that can instantly put a <span style={{color: "red"}}>smile</span> on your face. Whether you're admiring them in a garden or receiving a bouquet as a gift, they have a magical way of brightening up your day and reminding you of the simple joys in life. So go ahead, stop and smell the flowers, and let the happiness and <span style={{color: "red"}}>smiles</span> bloom!"
          </span>
        </div>
      </div>
  );
}

export default Photo;