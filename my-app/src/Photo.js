// import pexelsPhotoByAndr from "./assets/Photo.js.png";
import smilePhoto from "./assets/smilePhoto.png";

function Photo() {
  return (
    <div className="frame-2">
      <span className="lori">Lori</span>
      <img className="smilePhoto" src={smilePhoto}/>
      <span className="meeting-my-old-time">
        Meeting my old time friend when wondering the neighborhood...
      </span>
    </div>
  );
}
export default Photo;