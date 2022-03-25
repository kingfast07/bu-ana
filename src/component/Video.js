import tearImg from "../img/tear.png";
import photo1 from "../img/photo-1.png";
import photo2 from "../img/photo-2.png";
import video from "../video/video.mp4";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-container">
      <img className="tear-top" src={tearImg} alt="test" />

      <div className="video">
        <div className="video-bg" id="photo1"></div>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-text">
          <h2>Bu Ana & Pak Joan</h2>
        </div>
        <div className="video-bg" id="photo2"></div>
      </div>

      <img className="tear-bottom" src={tearImg} alt="test" />
    </div>
  );
};

export default Video;
