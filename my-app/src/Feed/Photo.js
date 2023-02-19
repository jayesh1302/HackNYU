import smilePhoto from "../assets/smilePhoto.png";
import feed1 from "../assets/feeding_1.png";
import feed2 from "../assets/feeding_2.png";
import feed3 from "../assets/feeding_3.png";
import './Photo.css';


function Photo() {

  return (
    <div className="photo-container">

      <div className="d-flex flex-column mb-10">
        <div className="frame">
          <span className="lori">Lori</span>
          <img className="smilePhoto" src={smilePhoto}/>
          <span className="meeting-my-old-time">
            Meeting my old time friend when wondering the neighborhood...
          </span>
        </div>
        <div className="frame">
          <span className="lori">Elaine</span>
          <img className="smilePhoto" src={feed1}/>
          <span className="meeting-my-old-time">
            Meeting my old time friend when wondering the neighborhood...
          </span>
        </div>
        <div className="frame">
          <span className="lori">Alyssa</span>
          <img className="smilePhoto" src={feed2}/>
          <span className="meeting-my-old-time">
            Meeting my old time friend when wondering the neighborhood...
          </span>
        </div>
        <div className="frame">
          <span className="lori">Marie</span>
          <img className="smilePhoto" src={feed3}/>
          <span className="meeting-my-old-time">
            Meeting my old time friend when wondering the neighborhood...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Photo;