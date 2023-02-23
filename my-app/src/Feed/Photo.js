import smilePhoto from "../assets/smilePhoto.png";
import feed1 from "../assets/feeding_1.png";
import feed2 from "../assets/feeding_2.png";
import feed3 from "../assets/feeding_3.png";
import "@fontsource/gloria-hallelujah";
import './Photo.css';
import './Caption.js'
// Timer imports
import React, { useState, useRef, useEffect, useMemo } from "react";
import Caption from "./Caption.js";

const preUrl = 'https://firebasestorage.googleapis.com/v0/b/smile-more-database.appspot.com/o/image%2F'
const postUrl = '?alt=media&token=fe126883-e07c-4b47-b341-399fbbfda18b'
// https://firebasestorage.googleapis.com/v0/b/smile-more-database.appspot.com/o/image%2F23df628c-afec-11ed-86d0-623f44a40911?alt=media&token=fe126883-e07c-4b47-b341-399fbbfda18b

function Photo() {
  let headers = new Headers();

  const [seconds, setSeconds] = useState(10 * 60); 
  const [posts, setPosts] = useState();
  const [collapsed, setCollapsed] = useState(true);

  const { current: myArray } = useRef(["one", "two", "three"]);



  useEffect(() => {
    fetch('http://hussainmudassir.pythonanywhere.com/posts') 
    .then((response) => response.json())
    .then((data) => {
      let resp = []
      Object.keys(data).forEach(function(key){
        resp.push(data[key]);
      })
      setPosts(resp);
    })
    .catch((err) =>{
      console.log(err.message);
    });
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(prevSeconds => prevSeconds - 1);
  //   }, [1000]);
  //   return () => clearInterval(interval);
  // }, [myArray]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if(posts && seconds) {
  return (
    <div className="photo-container">
      <div className="timer-container">
      <div className="timer-text">
        {minutes < 10 ? "0" + minutes : minutes}:
        {remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}
      </div>
    </div>
      {
        posts.map((p) => {
          let image = String(p.imageReference);
          let preview = (p.caption).split(' ').slice(0, 4).join(" ");
          preview += '...';
          const toggleCollapse = () => {
            setCollapsed(!collapsed);
          };
          console.log(preview);
          return (
            <div className="frame">
            <span className = "topcard"> {p.username}</span>
            <img src={preUrl + image.split('/')[1] + postUrl} alt="new" className="image"></img>
            <Caption text = {p.caption} previewLength={25}></Caption>
            {/* <div className={`caption ${collapsed ? 'collapsed' : ''}`}>
              <p style={{textAlign: 'left'}}>{collapsed ? preview : p.caption}</p>
              {p.caption.length > 25 && (           
                 <button className="collapse-btn" onClick={toggleCollapse}>
            {collapsed ? 'more' : ''}
            </button>)}
             </div> */}
            </div>
          )
        })
      }
          
      </div>
  );
    }
};

export default Photo;